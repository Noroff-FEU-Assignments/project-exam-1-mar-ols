const getDownArrow = document.querySelector(".fa-angle-down");
const getTest = document.querySelector(".test");

console.log(getDownArrow);

getDownArrow.addEventListener("click", () => {
  getTest.scrollIntoView();
});
