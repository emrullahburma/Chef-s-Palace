const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
