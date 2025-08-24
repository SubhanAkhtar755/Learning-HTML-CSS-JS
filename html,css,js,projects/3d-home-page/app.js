const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});



let menuToggle = document.querySelector(".menuToggle");
let menu1 = document.querySelector(".menu1");

menuToggle.onclick = function () {
  menu1.classList.toggle("active");
};