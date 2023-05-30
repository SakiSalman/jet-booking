import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from "cors";
import mongoConnection from './DB/db.js';
import userRoute from "./routes/user.js";


// initialization app
const app = express()
// initalize dotenv
dotenv.config()

// initialize cors
app.use(cors())
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Server Running PORT

const PORT = process.env.PORT || 8000


// routes
app.use("/api/v1/user", userRoute);




app.listen(PORT, () => {
    console.log(`'Server Running' on port ${PORT}`.bgGreen.black)
    mongoConnection()
})