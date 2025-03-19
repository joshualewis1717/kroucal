const btn = document.querySelector('header img:first-child');
const nav = document.querySelector('nav');
const close = document.querySelector("#close");
const header = document.querySelector('header'); 

btn.addEventListener('click', () => {
    if (window.scrollY > 0) {                              // If scrolled down
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }  else {                                               // If at the top
        nav.style.transform = "translateX(0%)";

    }

});


close.addEventListener('click', () => {
    nav.style.transform = "translateX(-100%)";
});


