const wrapper=document.querySelector('.wrapper');
const register=document.querySelector('.register_');
const login=document.querySelector('.login_');
const button=document.querySelector('.botn');
const close=document.querySelector('.icon-close');

register.onclick=function(){
    wrapper.classList.add('active');
};
login.onclick=function(){
    wrapper.classList.remove('active');
};
button.onclick=function(){
    wrapper.classList.add('button-active');
};
// close.onclick=function(){
//     wrapper.classList.remove('button-active');
// };