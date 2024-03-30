const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", function () {
  navUl.classList.toggle("show");
});

function Clicked(hamburger) {
  hamburger.classList.toggle("clicked");
}
