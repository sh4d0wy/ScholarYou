const users = require('../model/user');
const express= require('express');
const app = express.Router();

app.post('/',async (req,res)=>{
    const user = {
        name:req.body.name
    }
    const found = await users.find({name:user.name});
    if(!found){
        res.send("not authenticated")
    }else{
        if(found[0].password === req.body.password){
            res.send("user authenticated");
        }else{
            res.send("not authenticated")
        }
    }

})

module.exports = app;