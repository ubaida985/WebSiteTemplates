let header = document.getElementById('menuIcon');
let mainMenu = document.getElementById('mainMenu');
let menuActive = false;
header.addEventListener('click', function () {
    header.classList.toggle('menuActive')
    mainMenu.classList.toggle('showMenu')
})
$(window).scroll(function () {
    // apply css classes based on the situation
    if ($("#mainHeader").offset().top > 100) {
        $("#mainHeader").addClass("scrolled");
    } else {
        $("#mainHeader").removeClass("scrolled");
    }
});
