const rightDiv = document.getElementById("rightDiv");
const contact = document.getElementById("contacts");
const topPost = document.getElementById("topPost");
const blog = document.getElementById("blog");
const team = document.getElementById("team");
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
contact.addEventListener('click', () => {
    menuHandler();
});
team.addEventListener('click', () => {
    menuHandler();
});
topPost.addEventListener('click', () => {
    menuHandler();
});
blog.addEventListener('click', () => {
    menuHandler();
});
const menuHandler = () => {
    if (!menuOpen) {
        rightDiv.classList.add("open");
        mainMenu.classList.add("menuOpen");
        menuOpen = true;
    } else {
        rightDiv.classList.remove("open");
        mainMenu.classList.remove("menuOpen");
        menuOpen = false;
    }
}