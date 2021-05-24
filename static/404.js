const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function getNewColor()
{
    var symbols,color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(var i = 0; i < 6; ++i)
    {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.querySelector(".error404__text").style.color = color;
}

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