function onResize(){
    

    const header = document.querySelector('header'); 
    const headerText = document.querySelector('#headerText');
    const tel = document.querySelector('#tel');
    const name = document.querySelector('#companyName');
    const headerImg = document.querySelector('header img:first-child');

    header.style.height = window.innerWidth > 768 ? '100px' : '70px';

    if (window.scrollY == 0) {                              // If at the top
        name.style.transform = "translateY(-10px)";
        tel.style.opacity = '1';
        tel.style.visibility = 'visible';
        headerImg.style.background = "#00000000";
        headerText.style.background = "#00000000";
        headerText.style.height = "unset";
        //headerImg.style.opacity = '1';
        //headerImg.style.pointerEvents = 'auto';

    }  else {                                               // If scrolled down
        name.style.transform = "translateY(5px)";
        tel.style.opacity = '0';
        tel.style.visibility = 'hidden';
        document.querySelector('nav').style.transform = "translateX(-100%)";
        headerImg.style.background = "#FFFFFF40";
        headerText.style.background = "#00000040";
        //headerImg.style.opacity = '0';
        //headerImg.style.pointerEvents = 'none';
    }
}

window.addEventListener('scroll', onResize);
window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);