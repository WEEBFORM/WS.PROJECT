import {db} from "../../config/connectDB.js"
import {authenticateUser} from "../../middlewares/verify.mjs"
import moment from "moment"


//API TO GET USER INFORMATION
export const viewProfile = (req, res)=>{
    //CHECK FOR JWT
    authenticateUser(req, res, () => {
        //const user = req.user;
        const userId = req.params.id;
        //QUERY DB TO GET USER INFO
        const q = "SELECT * FROM users AS u WHERE id = ?"
        db.query(q, userId, (err,data)=>{
        if(err){
            return res.status(500).json(err)
        }
        const {password, ...userInfo} = data[0]
        return res.status(200).json(userInfo)
        })
    });
}

//API TO EDIT USER INFO
export const editProfile = (req, res)=>{
    authenticateUser(req, res, () => {
        const user = req.user;
        //QUERY DB TO EDIT USER INFO
        const q = "UPDATE users SET email = ?, username = ?, nationality = ?, password = ?, coverPhoto = ?, profilePic = ?, bio = ? WHERE id = ?";
        const values = [
            req.body.email,
            req.body.username,  
            req.body.nationality,
            req.body.password,
            req.body.coverPhoto,
            req.body.profilePic, 
            req.body.bio,
            user.id
         ];
        db.query(q, values, (err,data)=>{
        if(err){
            return res.status(500).json(err)
        }
        else{
            res.status(200).json("User data updated successfully")
        }
        })
    }) 
}

//API TO DELETE ACCOUNT 
export const deleteAccount = (req, res)=>{
    authenticateUser(req, res, () => {
        const user = req.user;
        //QUERY DB TO EDIT USER INFO
        const q = "DELETE FROM users WHERE id = ?"
        db.query(q, user.id, (err, data)=>{ 
        if(err){
            return res.status(500).json(err)
        }
        else{
            res.clearCookie("accessToken",{
                secure: true,
                sameSite: "none"
            })
            const account = user.username
            return res.status(200).json(`${account}'s account has been deleted successfully`)
        }
        })  
    }) 
}
