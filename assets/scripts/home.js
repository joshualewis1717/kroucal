function showHeroText(){
    const heroText = document.querySelector('#heroText'); 

    heroText.style.transform = "translateY(0)";
    heroText.style.opacity = '1';
}

function onResize(){
    const headerHeight = window.innerWidth > 768 ? '100px' : '70px';

    const header = document.querySelector('header'); 
    const tel = document.querySelector('#tel');
    const name = document.querySelector('#companyName');

    if (window.scrollY == 0) {                              // If at the top
        header.style.height= headerHeight;
        header.style.backgroundColor = '#FFFFFF00';
        header.style.borderBottom = "none";
        name.style.transform = "translateY(-10px)";
        tel.style.opacity = '1';
        tel.style.visibility = 'visible';
    }  else {                                               // If scrolled down
        header.style.height= '50px';
        header.style.backgroundColor = '#FFFFFFFF';
        header.style.borderBottom = "1px solid #D3D3D3";
        name.style.transform = "translateY(0)";
        tel.style.opacity = '0';
        tel.style.visibility = 'hidden';
        
    }
}

window.addEventListener('scroll', onResize);
window.addEventListener('resize', onResize);
window.addEventListener('load', onResize);

window.addEventListener('load', showHeroText);