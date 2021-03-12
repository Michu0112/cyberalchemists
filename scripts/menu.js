
const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
   if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
      navBar.style.right = 0;
   }
   else{
      menuBtn.classList.remove('open');
      menuOpen = false;
      navBar.style.right = '-100%';
   }
});
