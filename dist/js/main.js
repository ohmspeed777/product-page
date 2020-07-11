const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu__item');

burger.addEventListener('click', openMenu);

let showMenu = false;

function openMenu(){ 
    if (!showMenu) {
        burger.classList.add("open");
        navMenu.classList.add("open");
        navMenuItems.forEach(item => item.classList.add("open"));
        showMenu = true;
    } else {
        burger.classList.remove("open");
        navMenu.classList.remove("open");
        navMenuItems.forEach(item => item.classList.remove("open"));
        showMenu = false;
    }
}