const getDownArrow = document.querySelector(".fa-angle-down");
const indexContent = document.querySelector(".index-content");

getDownArrow.addEventListener("click", () => {
  indexContent.scrollIntoView();
});

const productContainer = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const prevBtn = document.querySelectorAll(".prev-btn");

productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
