const menu = document.querySelector(".menu"),
  hamburger = document.querySelector(".hamburger"),
  closeMark = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});
closeMark.addEventListener("click", () => {
  menu.classList.remove("active");
});
