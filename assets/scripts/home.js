/*function showHeroText(){
    const heroText = document.querySelector('#heroText'); 

    heroText.style.transform = "translateY(0)";
    heroText.style.opacity = '1';
}*/

function onResize(){
    const headerHeight = window.innerWidth > 768 ? '100px' : '70px';

    const header = document.querySelector('header'); 
    const tel = document.querySelector('#tel');
    const name = document.querySelector('#companyName');
    const headerImg = document.querySelector('header img:first-child');

    function changeImage(newSrc) {
        headerImg.style.opacity = 0;
    
        setTimeout(() => {
            headerImg.src = newSrc;
            headerImg.style.opacity = 1; 
        }, 300); 
    }

    if (window.scrollY == 0) {                              // If at the top
        header.style.height= headerHeight;
        header.style.backgroundColor = '#0188BE00';
        header.style.borderBottom = "1px solid #0188BE00";
        name.style.transform = "translateY(-10px)";
        tel.style.opacity = '1';
        tel.style.visibility = 'visible';

        if (headerImg.src.includes('up')) changeImage('assets/images/menu.svg');
    }  else {                                               // If scrolled down
        header.style.height= '50px';
        header.style.backgroundColor = '#FFFFFFFF';
        header.style.borderBottom = "1px solid rgb(122, 122, 122)";
        name.style.transform = "translateY(0)";
        tel.style.opacity = '0';
        tel.style.visibility = 'hidden';
        document.querySelector('nav').style.transform = "translateX(-100%)";

        if (headerImg.src.includes('menu')) changeImage('assets/images/up.svg');
    }
}

window.addEventListener('scroll', onResize);
window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);

/*window.addEventListener('load', showHeroText);*/