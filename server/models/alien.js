const mongoose = require('mongoose')
const alienSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    roll:{
        type : Number,
        required : true 
    },
    branch:{
        type : String,
        required : true,
    },
    backlogs:{
        type : Boolean,
        required : true,
        default : true
    },
    mobile:{
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model('Alien',alienSchema)