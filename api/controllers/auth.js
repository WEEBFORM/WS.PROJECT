import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {db} from "../index.js"

export const register = (req, res)=>{
    //QUERY DB TO CHECK FOR EXISTING CREDENTIALS
    const q = "SELECT * FROM users WHERE username OR email = (?)"

    db.query(q, [req.body.username, req.body.email], (err,data)=>{
        if(err) return res.status(500).json(err)
        console.log(err)
        if(data.length) return res.status(409).json("Username/email exists!")
    })

    //HASH PASSWORD
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    //REGISTER USER
    const r = "INSERT INTO users (`email`, `username`, `nationality`, `password`, `coverPhoto`, `profilePic`, `bio`) VALUES(?)";
     const values = [
        req.body.email,
        req.body.username,
        req.body.nationality,
        hashedPassword,
        req.body.coverPhoto,
        req.body.profilePic, 
        req.body.bio,
     ];
     db.query(r, [values], (err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json("User created successfully")
    })
}

export const login = (req, res)=>{
    //CHECK DATABASE FOR USER
    const q = "SELECT * FROM users WHERE username = ?"
    
    db.query(q, [req.body.username], (err,data)=>{
        if(err) return res.status(500).json(err)
        console.log(err)
        if(data.length == 0) return res.status(404).json("Username/email not found!")
    
    //CONFIRM PASSWORD
    const confirmPassword = bcrypt.compareSync(req.body.password, data[0].password)
    if(!confirmPassword) return res.status(400).json('Wrong password');
    const {password, ...others} = data[0]
    const token = jwt.sign({id: data[0].id}, 'Secretkey');
    res.cookie("accessToken", token,{
        httpOnly: true,
    }).status(200).json(others)
    })
}

export const logout = (req, res)=>{
    
}