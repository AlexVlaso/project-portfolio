const menu = document.querySelector(".menu"),
  hamburger = document.querySelector(".hamburger"),
  closeMark = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeMark.addEventListener("click", () => {
  menu.classList.remove("active");
});
const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((el, i) => {
  lines[i].style.width = el.innerHTML;
});
