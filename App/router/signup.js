const users = require('../model/user');
const express= require('express');
const app = express.Router();

app.post('/',async (req,res)=>{
    const user =new users({
        name:req.body.name,
        password:req.body.password
    })
    try{
        await user.save();
        res.send("User Created");
    }catch(e){
        res.send("error occured");
        console.log(e)
    }
})

module.exports = app;