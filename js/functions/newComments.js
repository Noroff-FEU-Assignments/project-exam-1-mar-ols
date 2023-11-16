import { commentsAPI, id } from "./api.js";

export async function createSubmitNewComments() {
  try {
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
  }
}
