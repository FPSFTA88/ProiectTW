const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const highlightMenu = () =>
{
    const techMenu = document.querySelector('#tech');
    techMenu.classList.add('highlight');
    if(window.innerWidth < 960 )
    {
        techMenu.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

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