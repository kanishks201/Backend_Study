// require('dotenv').config({ path: fileUrl }) // This statement is used for dotenv but it disturbs code consistency

import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!", err)
})


/*
// Approach 1:
//IIFE function call is used, Try catch is used for error handling and async-await used for database because DB connection takes time
import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR: ", error)
        throw error
    }
})()
*/