let header = document.getElementById('menuIcon');
let mainMenu = document.getElementById('mainMenu');
let menuActive = false;
header.addEventListener('click', function () {
    header.classList.toggle('menuActive')
    mainMenu.classList.toggle('showMenu')
})