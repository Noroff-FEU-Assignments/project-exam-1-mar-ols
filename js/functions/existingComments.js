import { commentsAPI } from "./api.js";

export async function fetchDisplayExistingComments() {
  try {
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
  } catch (e) {
    console.error(e);
  }
}
