import { fetchBlog } from "./api.js";

async function displaySingleBlog() {
  const blog = await fetchBlog();

  const singleBlogContainer = document.querySelector(".single-blog-container");

  singleBlogContainer.innerHTML = `<div class="single-blog">
                                     <h1>${blog.title.rendered}</h1>
                                     <div>
                                       <p>${blog.date}</p>
                                       <dialog class="modal-container">
                                       <p class="inner-modal"></p>
                                       </dialog>
                                       <p>${blog.content.rendered}</p>
                                     </div>
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
}

displaySingleBlog();
