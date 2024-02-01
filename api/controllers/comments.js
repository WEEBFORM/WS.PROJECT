import {db} from "../config/connectDB.js"
import {authenticateUser} from "../../middlewares/verify.mjs"
import moment from "moment"


//API TO CREATE NEW COMMENT
export const addComment = (req, res)=>{
    //CHECK FOR JWT
    authenticateUser(req, res, () => {
        const user = req.user;
        const postId = req.params.postId
        //QUERY DB TO COMMENT ON POST
        const q = "INSERT INTO comments (`desc`, `gifs`,`userId`,`postId`,`createdAt`) VALUES (?)"
        const values =[
            req.body.desc,
            req.body.gifs,
            user.id,
            postId,
            moment(Date.now()).format("YYYY-MM-DD HH:MM:SS")
        ]
        db.query(q, [values], (err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json("commented successfully")
        })
    });
}

//API TO VIEW COMMENTS
export const getComment = (req, res)=>{
    authenticateUser(req, res, () => {
        const user = req.user;
        const postId = req.params.postId
        //QUERY DB TO GET COMMENTS
        const q = "SELECT c.*, u.id AS userId, username, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) LEFT JOIN posts AS p ON (p.id = c.postId) WHERE c.postId = ? OR c.userId = ?";
        db.query(q, [postId, user.id], (err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json(data)
        })
    }) 
}

//API TO DELETE COMMENT
export const deleteComment = (req, res)=>{
    authenticateUser(req, res, () => {
        const user = req.user;
        const commentId = req.params.commentId
        //QUERY DB TO GET POSTS
        const q = "DELETE FROM comments WHERE id = ? AND userId = ?";

        db.query(q, [commentId, user.id], (err,data)=>{
        if(err) return res.status(500).json(err)
        res.status(200).json("Comment deleted succesfully")
        })
    }) 
}