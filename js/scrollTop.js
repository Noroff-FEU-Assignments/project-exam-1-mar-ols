const scrollBtn = document.querySelector(".back-to-top");

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
