const menu = document.querySelector("nav.navbar .container .menu-toggle input");
const baru = document.querySelector("nav.navbar .container div.collapse ul");
const nav = document.querySelector("nav.navbar");

menu.addEventListener("click", function () {
  baru.classList.toggle("slide");
  nav.classList.toggle("bar-bar");
});
