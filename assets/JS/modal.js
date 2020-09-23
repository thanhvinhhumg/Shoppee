const register = document.querySelector('.header__navbar-register');
const login = document.querySelector('.header__navbar-login');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');
const formregister = document.querySelector('.auth__form-register');
const btnloginregister = document.querySelectorAll('.auth__form-switch-btn');
const formlogin =  document.querySelector('.auth__form-login');
const back = document.querySelectorAll('.btn-back');

register.addEventListener('click', function (){
    modal.style.display = "flex";
    formregister.style.display="block";
    formlogin.style.display="none";
   
});
back[0].addEventListener('click', function(){
    modal.style.display= 'none';
});
back[1].addEventListener('click', function(){
    modal.style.display= 'none';
});
window.addEventListener('click', (event)=>{
    if(event.target== overlay){
        modal.style.display="none";
    }
});
btnloginregister[0].addEventListener('click', ()=>{
    formregister.style.display="none";
    formlogin.style.display="block";
});
btnloginregister[1].addEventListener('click', ()=>{
    formregister.style.display="block";
    formlogin.style.display="none";
});
login.addEventListener('click', ()=>{
    modal.style.display='flex';
    formlogin.style.display="block";
    formregister.style.display="none";
})