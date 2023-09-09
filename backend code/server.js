const express = require('express');
const router = express.Router();
const app = express();
const userModel = require('./model/user')
const signupRouter = require('./router/signup');
const loginRouter = require('./router/login');
const userData = require('./router/data');
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('./frontendcode/html'))
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/data',userData)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/frontencode/html/index.html')
})
app.listen(3000,()=>{
    console.log('server started')
})