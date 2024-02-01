import express from "express"
import mysql from "mysql"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import {config} from "dotenv"
import authRoute from "./routes/auth.js"
import postRoute from "./routes/posts.js"
import followRoute from "./routes/followers.js"
import Likes from "./routes/likes.js"
import Comments from "./routes/comments.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
config()
app.use('/api/v1/user', authRoute)
app.use('/api/v1/posts/', postRoute)
app.use('/api/v1/reach/', followRoute)
app.use(Likes)
app.use('/api/v1/comments', Comments)

 
const port = process.env.port 
app.listen(port,  ()=>{
    console.log("Server running");
     
})