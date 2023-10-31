const getDownArrow = document.querySelector(".fa-angle-down");
const introContainer = document.querySelector(".intro-container");

getDownArrow.addEventListener("click", () => {
  introContainer.scrollIntoView();
});
