const search = document.querySelector(".search");
const searchform = document.querySelector(".search-form");

search.addEventListener("click", () => {
  searchform.classList.toggle("search-form-active");
});

const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
