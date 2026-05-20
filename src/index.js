require('dotenv').config()

const express = require("express");

const app = express();

const mongoose = require('mongoose')

const { DB_NAME } = require('./constants')
const connectDB = require('./db')

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    } ) 
})
.catch((err) => {
    console.log("MongoDB connection failed" , err);
})





/*
const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

( async  () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))

    } catch (error) {
        console.error("ERROR: " , error);
        throw err
    }
}) ()

*/