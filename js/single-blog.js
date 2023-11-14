import { fetchBlog, title, id } from "./api.js";
import { fetchDisplayExistingComments } from "./existingComments.js";
import { createSubmitNewComments } from "./newComments.js";
import { error } from "./error.js";

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
                                       <h1>${blog.title.rendered}</h1>
                                       <div>
                                         <p class="blog-date">${blog.date}</p>
                                         <p>${blog.content.rendered}</p>
                                         <dialog class="modal-container">
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

        getModal.showModal();
        getInnerModal.innerHTML = getImgHTML;

        window.onclick = function (event) {
          if (event.target === getModal) {
            getModal.close();
          }
        };
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
