// Express Application

// Requiring Express Module
const express = require('express')

// Creating a Server Application
const app = express()

// We can also create REST APIs
app.get("/",(req,res)=>{
    res.send("Hi welcome to Express Server Application")
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page</h2>")
})
app.get("/content",(req,res)=>{
    res.sendFile(__dirname + "/about.html")
})

// Listen App on a Port
app.listen(5000, () => {
    console.log("Server is running on Port 5000")
})