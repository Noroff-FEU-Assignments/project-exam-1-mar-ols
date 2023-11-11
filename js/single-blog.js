import { fetchBlog, title, id } from "./api.js";
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
    singleBlogContainer.innerHTML = `<div class="single-blog frame">
                                       <h1>${blog.title.rendered}</h1>
                                       <div>
                                         <p class="blog-date">${blog.date}</p>
                                         <p>${blog.content.rendered}</p>
                                         <dialog class="modal-container">
                                         <div class="inner-modal"></div>
                                         </dialog>
                                       </div>
                                       <div id="comments-container"></div>
                                       <div>
                                         <form id="comment-form">
                                           <label for="author">Name:*</label>
                                           <input type="text" id="author" name="author" required>
                                           <label for="comment">Comment:*</label>
                                           <textarea id="comment" name="comment" required></textarea>
                                           <button type="submit" class="cta submit">Submit</button>
                                         </form>
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

    // Fetching and displaying existing comments

    const commentsAPI =
      "https://www.m-boe.com/wp-json/wp/v2/comments?post=" + id;

    const response = await fetch(commentsAPI);
    const results = await response.json();
    const commentsContainer = document.getElementById("comments-container");

    results.forEach((comments) => {
      commentsContainer.innerHTML += `<div class="comments-container">
                                        <div class="single-comment">
                                          <p class="comment-author">${comments.author_name}:</p>
                                          <p>${comments.content.rendered}</p>
                                        </div>
                                      </div>`;
    });

    // Creating and submitting new comments
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const author = document.getElementById("author").value;
      const comment = document.getElementById("comment").value;

      const newComment = {
        author_name: author,
        content: comment,
        post: `${id}`,
      };

      fetch(commentsAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((response) => response.json())
        .then((comment) => {
          const commentsContainer =
            document.getElementById("comments-container");
          const commentElement = document.createElement("div");
          commentElement.innerHTML = `<div class="single-comment">
                                        <p class="comment-author">${comment.author_name}:</p>
                                        <p>${comment.content.rendered}</p>
                                      </div>`;

          commentsContainer.appendChild(commentElement);
          document.getElementById("author").value = "";
          document.getElementById("comment").value = "";
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
