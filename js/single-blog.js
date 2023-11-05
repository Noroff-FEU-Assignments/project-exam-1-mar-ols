import { fetchBlog, title } from "./api.js";

async function displaySingleBlog() {
  const blog = await fetchBlog();

  const singleBlogContainer = document.querySelector(".single-blog-container");
  const titleContainer = document.querySelector("#title");
  titleContainer.textContent =
    singleBlogContainer.innerHTML = `Voyaging North - ${title}`;

  singleBlogContainer.innerHTML = `<div class="single-blog frame">
                                     <h1>${blog.title.rendered}</h1>
                                     <div>
                                       <p>${blog.date}</p>
                                       <p>${blog.content.rendered}</p>
                                       <dialog class="modal-container">
                                       <p class="inner-modal"></p>
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
    window.location.href = "blogs.html";
  });
}

displaySingleBlog();
