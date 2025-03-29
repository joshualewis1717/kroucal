function onResize(){
    const headerHeight = window.innerWidth > 768 ? '100px' : '70px';

    const header = document.querySelector('header'); 
    const tel = document.querySelector('#tel');
    const name = document.querySelector('#companyName');
    const headerImg = document.querySelector('header img:first-child');

    const navSpacer = document.querySelector('#navSpacer');
    navSpacer.style.height = headerHeight;


    if (window.scrollY == 0) {                              // If at the top
        header.style.height= headerHeight;
        name.style.transform = "translateY(-10px)";
        tel.style.opacity = '1';
        tel.style.visibility = 'visible';
        headerImg.style.opacity = '1';
        headerImg.style.pointerEvents = 'auto';

    }  else {                                               // If scrolled down
        header.style.height= '50px';
        name.style.transform = "translateY(0)";
        tel.style.opacity = '0';
        tel.style.visibility = 'hidden';
        document.querySelector('nav').style.transform = "translateX(-100%)";
        headerImg.style.opacity = '0';
        headerImg.style.pointerEvents = 'none';
    }
}

window.addEventListener('scroll', onResize);
window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);