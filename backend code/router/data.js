const express = require('express');
const router = express.Router();
const {addData}= require('../controller/data')

router.post('/',addData)
      
module.exports=router;