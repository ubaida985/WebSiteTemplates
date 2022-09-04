const rightDiv = document.getElementById("rightDiv");
const mainMenu = document.getElementById("mainMenu");
let menuOpen = false;
rightDiv.addEventListener('click', () => {
    if (!menuOpen) {
        rightDiv.classList.add("open");
        mainMenu.classList.add("menuOpen");
        menuOpen = true;
    } else {
        rightDiv.classList.remove("open");
        mainMenu.classList.remove("menuOpen");
        menuOpen = false;
    }
});