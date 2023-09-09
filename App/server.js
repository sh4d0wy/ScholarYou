const express = require('express');
const router = express.Router();
const app = express();
const userModel = require('./model/user')
const signupRouter = require('./router/signup');
const loginRouter = require('./router/login');
const userData = require('./router/data');
const path = require('path');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/data',userData)

app.get('/',(req,res)=>{
    res.sendFile(__dirname,'/public/index.html')
})

app.listen(3000,()=>{
    console.log('server started')
})