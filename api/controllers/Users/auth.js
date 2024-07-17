import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../config/connectDB.js";
import multer from "multer";
import { errorHandler } from "../../middlewares/errors.mjs";
import { config } from "dotenv";
config();

// HANDLE MEDIA PROCESSING LOGIC
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const cpUpload = upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'coverPhoto', maxCount: 1 }
]);

// API TO REGISTER NEW USERS
export const register = (req, res, next) => {
    cpUpload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: "File upload error", error: err });
        } else if (err) {
            return res.status(500).json({ message: "Unknown error", error: err });
        }

        try {
            // CHECK FOR EXISTING USERNAME OR EMAIL
            const q = "SELECT * FROM users WHERE username = ? OR email = ?";
            const storedUser = [req.body.username, req.body.email];

            db.query(q, storedUser, (err, data) => {
                if (err) return res.status(500).json(err);
                if (data.length) {
                    // Check which of the credentials exist
                    let existingUser = [];
                    data.forEach(user => {
                        if (user.username === req.body.username) existingUser.push("Username");
                        if (user.email === req.body.email) existingUser.push("Email");
                    });

                    return res.status(409).json(`${existingUser.join(" and ")} already in use!`);
                }

                // If credentials don't exist, proceed with user registration
                // Hash password
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(req.body.password, salt);

                // Handle the uploaded files
                const profilePic = req.files['profilePic'] ? req.files['profilePic'][0].path : null;
                const coverPhoto = req.files['coverPhoto'] ? req.files['coverPhoto'][0].path : null;

                if (!profilePic || !coverPhoto) {
                    return res.status(400).send('Files were not uploaded correctly.');
                }

                // Register user
                const r = "INSERT INTO users (`email`, `username`, `nationality`, `password`, `coverPhoto`, `profilePic`, `bio`) VALUES (?)";
                const values = [
                    req.body.email,
                    req.body.username,
                    req.body.nationality,
                    hashedPassword,
                    coverPhoto,
                    profilePic,
                    req.body.bio,
                ];

                db.query(r, [values], (err, data) => {
                    if (err) {
                        return res.status(500).json(err);
                    }
                    const payload = { id: data.insertId };
                    const token = jwt.sign(payload, process.env.Secretkey);
                    res.cookie('accessToken', token, {
                        httpOnly: true
                    }).status(200).json({ message: "User created successfully" });
                });
            });
        } catch (err) {
            next(errorHandler);
        }
    });
};

// API FOR USER LOGIN
export const login = (req, res) => {
    // DETERMINE INPUT FIELD (EMAIL/USERNAME)
    let searchField;
    let value = [];
    if (req.body.username) {
        searchField = "u.username = ?";
        value = [req.body.username];
    } else if (req.body.email) {
        searchField = "u.email = ?";
        value = [req.body.email];
    } else {
        return res.status(400).json("Username or email is required");
    }
    //QUERY DB TO CHECK FOR USER
    const q = `SELECT * FROM users AS u WHERE ${searchField}`;
    db.query(q, value, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Username or email not found!");

        // Confirm password
        const confirmPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if (!confirmPassword) return res.status(400).json('Wrong password');
        const { password, ...others } = data[0];
        const token = jwt.sign({ id: data[0].id }, process.env.Secretkey);
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).json(others);
    });
};

// API FOR LOGOUT
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("Logged out successfully");
};
