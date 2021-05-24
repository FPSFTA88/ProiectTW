const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const name = document.querySelector('#name');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');
const button = document.querySelector('#register');

name.addEventListener('input', letter =>
{
    name.textContent = letter.target.value
})

username.addEventListener('input', letter =>
{
    username.textContent = letter.target.value
})

email.addEventListener('input', letter =>
{
    email.textContent = letter.target.value
})

phone.addEventListener('input', letter =>
{
    phone.textContent = letter.target.value
})

password.addEventListener('input', letter =>
{
    password.textContent = letter.target.value
})

confirm_password.addEventListener('input', letter =>
{
    confirm_password.textContent = letter.target.value
})

const saveToLocalStorage_name = () =>
{
    localStorage.setItem('name', name.textContent)
}

const saveToLocalStorage_username = () =>
{
    localStorage.setItem('username', username.textContent)
}

const saveToLocalStorage_email = () =>
{
    localStorage.setItem('email', email.textContent)
}

const saveToLocalStorage_phone = () =>
{
    localStorage.setItem('phone', phone.textContent)
}

const saveToLocalStorage_password = () =>
{
    localStorage.setItem('password', password.textContent)
}

const saveToLocalStorage_confirm_password = () =>
{
    localStorage.setItem('confirm_password', confirm_password.textContent)
}

button.addEventListener('click', saveToLocalStorage_name)
button.addEventListener('click', saveToLocalStorage_username)
button.addEventListener('click', saveToLocalStorage_email)
button.addEventListener('click', saveToLocalStorage_phone)
button.addEventListener('click', saveToLocalStorage_password)
button.addEventListener('click', saveToLocalStorage_confirm_password)

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