const mongoose = require('mongoose')
const register = new mongoose.Schema({
    fname:{
        type:String,
        max:[50,'name too long'],
        min:[2,'Name too short '],
        required:[true,'Name is required']
    },
    lname:{
        type:String,
        max:[50,'name too long'],
        min:[2,'Name too short '],
        required:[true,'Name is required']
    },
    email:{
        type:String,
        min:[2,'Email too short '],
        required:[true,'Email is required']

    },
    password:{
        type:String,
        min:[2,'Password too short '],
        required:[true,'Name is required']
    },
    phone:{
        type:String,
        required:[true,'Gender  is required']
    },
    gender:{
        type:String,
        required:[true,'Gender  is required']
    },
    role:{
        type:String,
        required:[true,'Role is required']
    },
    avatar:{
        type:String,
        required:[true,'Gender  is required']
    },

})
const AllUsers = mongoose.model("registration",register)
exports.AllUsers = AllUsers