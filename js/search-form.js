const search = document.querySelector(".search");
const searchform = document.querySelector(".search-form");

search.addEventListener("click", () => {
  searchform.classList.toggle("search-form-active");
});
