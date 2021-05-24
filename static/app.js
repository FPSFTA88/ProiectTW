const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const highlightMenu = () => {
    const elem =document.querySelector('.highlight');
    const homeMenu =document.querySelector('#home-page');
    const productsMenu =document.querySelector('#products-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 400)
    {
        homeMenu.classList.add('highlight')
        productsMenu.classList.remove('highlight')
        return;
    }else if(window.innerWidth > 960 && scrollPos < 900)
    {
        productsMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem)
    {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () =>
{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars)
    {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

function realtimeClock(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var ampm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + ampm;
    var t = setTimeout(realtimeClock, 500);
}

window.addEventListener('click',realtimeClock);