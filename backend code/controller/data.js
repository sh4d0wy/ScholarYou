const dataModel = require('../model/data')

const addData = async (req,res)=>{
    const data = {
        username: req.body.username,
        dob:req.body.dob,
        email:req.body.email,
        category:req.body.category,
        course:req.body.course,
        branch:req.body.branch,
        state:req.body.state,
        city:req.body.city,
        currentyear:req.body.cyr,
        gpa:req.body.gpa,
    }
    dataModel.insert([data]);
    await dataModel.save();
}

module.exports = {addData};