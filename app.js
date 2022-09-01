const hamburgerMenu = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
