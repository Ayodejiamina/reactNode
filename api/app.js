const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const userRoutes= require('./Routes/userR')
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],

}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(userRoutes)
mongoose.connect("mongodb+srv://codemina:codemina2210@prodev.hxkdcr3.mongodb.net/reactNode?retryWrites=true&w=majority").then(user=>{
    app.listen(3002)
    console.log(user.connection.host)
})
