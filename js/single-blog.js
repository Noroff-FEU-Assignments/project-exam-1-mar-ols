import { fetchBlog, title } from "./functions/api.js";
import { fetchDisplayExistingComments } from "./functions/existingComments.js";
import { createSubmitNewComments } from "./functions/newComments.js";
import { makeNewDate } from "./functions/newDate.js";
import { error } from "./functions/error.js";

async function displaySingleBlog() {
  try {
    // Fetching and displaying blog post
    const blog = await fetchBlog();

    const singleBlogContainer = document.querySelector(
      ".single-blog-container"
    );
    const titleContainer = document.querySelector("#title");
    titleContainer.textContent =
      singleBlogContainer.innerHTML = `Voyaging North - ${title}`;
    const getLoaderDiv = document.querySelector(".loader");
    getLoaderDiv.innerHTML = " ";
    singleBlogContainer.innerHTML = `<div class="single-blog">
                                       <h1 class="centered-text">${
                                         blog.title.rendered
                                       }</h1>
                                       <div>
                                         <p class="blog-date">${await makeNewDate()}</p>
                                         <p>${blog.content.rendered}</p>
                                         <dialog class="modal-container">
                                         <div class="close-container">
                                           <button id="close" aria-label="close">Close X</button>
                                         </div>
                                         <div class="inner-modal"></div>
                                         </dialog>
                                       </div>
                                     </div>`;

    // Handling image popup box
    const getImages = document.querySelectorAll(".wp-block-image");

    getImages.forEach((image) => {
      const getImgHTML = image.innerHTML;
      image.addEventListener("click", () => {
        const getModal = document.querySelector(".modal-container");
        const getInnerModal = document.querySelector(".inner-modal");
        const getCloseBtn = document.querySelector("#close");

        getModal.showModal();
        getInnerModal.innerHTML = getImgHTML;

        getCloseBtn.addEventListener("click", () => {
          getModal.close();
        });

        getModal.addEventListener("click", (event) => {
          const dialogDimensions = getModal.getBoundingClientRect();
          if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
          ) {
            getModal.close();
          }
        });
      });
    });
  } catch (e) {
    console.error(e);
    error();
  }
}

displaySingleBlog();

function backButton() {
  const getBackBtn = document.querySelector(".back-blog");

  getBackBtn.addEventListener("click", () => {
    window.history.back();
  });
}

backButton();

fetchDisplayExistingComments();

createSubmitNewComments();
