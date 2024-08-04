import {db} from "../config/connectDB.js"
import errorHandler from "../middlewares/errors.mjs";
import {authenticateUser} from "../middlewares/verify.mjs"
import moment from "moment"
import multer from "multer";

// HANDLE MEDIA PROCESSING LOGIC
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/stores');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const cpUpload = upload.single('logoImage');

//CREATE NEW STORE
export const newStore = (req, res) => {
    authenticateUser(req, res, () => {
        const user = req.user;
        //PARSE UPLOADED FILES
        cpUpload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json({ message: "File upload error", error: err });
            } else if (err) {
                return res.status(500).json({ message: "Unknown error", error: err });
            }

            try {
                const c = "SELECT * FROM stores WHERE ownerId = ?";
                db.query(c, user.id, (err, data) => {
                    if (err) {
                        return res.status(500).json('Bad request');
                    } 
                    if (data.length) {
                        return res.status(409).json('You can only create one store'); 
                    }

                    const logoImage = req.file ? req.file.path : null;

                    const i = "INSERT INTO stores (`ownerid`, `label`, `description`, logoImage, category, created) VALUES (?)";
                    const values = [
                        user.id,
                        req.body.label,
                        req.body.description,
                        logoImage,
                        req.body.category,
                        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
                    ];

                    db.query(i, [values], (err, data) => {
                        if (err) {
                            return res.status(500).json(`${err}`);
                        } else {
                            const storeName = req.body.label;
                            return res.status(200).json(`New store ${storeName} created successfully`);
                        }
                    });
                });
            } catch (err) {
                console.log(err);
                return res.status(500).json("internal server error");
            }
        });
    });
};
