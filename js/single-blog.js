import { fetchBlog, title } from "./api.js";

async function displaySingleBlog() {
  try {
    const blog = await fetchBlog();

    const singleBlogContainer = document.querySelector(
      ".single-blog-container"
    );
    const titleContainer = document.querySelector("#title");
    titleContainer.textContent =
      singleBlogContainer.innerHTML = `Voyaging North - ${title}`;
    const getLoaderDiv = document.querySelector(".loader-container");
    getLoaderDiv.innerHTML = " ";

    singleBlogContainer.innerHTML = `<div class="single-blog frame">
                                     <h1>${blog.title.rendered}</h1>
                                     <div>
                                       <p class="blog-date">${blog.date}</p>
                                       <p>${blog.content.rendered}</p>
                                       <dialog class="modal-container">
                                       <div class="inner-modal"></div>
                                       </dialog>
                                     </div>
                                     <button type="button" class="cta back-blog">Go back</button>
                                   </div>`;

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

    const getBackBtn = document.querySelector(".back-blog");

    getBackBtn.addEventListener("click", () => {
      window.history.back();
    });
  } catch (e) {
    console.error(e);
  }
}

displaySingleBlog();
