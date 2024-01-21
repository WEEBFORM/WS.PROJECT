import express from "express"
import mysql from "mysql"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import userRoute from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/v1/user', userRoute)

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "moonlitE54321$",
    database: "weeb social"
}) 
db.connect(function(err){
    if (err)
    throw err;
    console.log("connection successful")
})

const port = 8000 
app.listen(port,  ()=>{
    console.log("Server running");
})