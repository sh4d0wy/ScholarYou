const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    username: {type:String,
        required:true,
        unique:true
    },
    dob:{type:Date,
        required:true},
    email:{type:String,
        required:true},
    category:{type:String,
        required:true},
    course:{type:String,
        required:true},
    branch:{type:String,
        required:true},
    state:{type:String,
        required:true},
    city:{type:String,
        required:true},
    currentyear:{type:Number,
        required:true},
    gpa:{type:String,
        required:true},
})

const userData = new mongoose.model('userData',dataSchema);

module.exports = userData;