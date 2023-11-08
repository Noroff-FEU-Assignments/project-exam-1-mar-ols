import { wpAPI } from "./api.js";
import { error } from "./error.js";

const blogsContainer = document.querySelector(".blogs-container");
const loadMoreButton = document.querySelector(".load-more");

let page = 1;
let isLoading = false;

function fetchAndDisplayBlogs() {
  if (isLoading) return;

  isLoading = true;
  loadMoreButton.textContent = "Loading...";

  fetch(wpAPI + `?page=${page}`)
    .then((response) => response.json())
    .then((result) => {
      result.forEach((blog) => {
        blogsContainer.innerHTML += `<div class="blogs">
                                       <div class="individual-blog-container">
                                         <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">
                                         <h2>${blog.title.rendered}</h2></a>
                                         <div class="blog-featured-image">
                                         <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">
                                         <img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}"></a>
                                       </div>
                                       <div class="excerpt">
                                         <p>${blog.date}</p>
                                         <p>${blog.excerpt.rendered}</p>
                                         <h3><a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}" class="blog-link">Read more..</a></h3>
                                       </div> 
                                     </div>`;
      });

      isLoading = false;
      loadMoreButton.textContent = "Load More";
      page++;
    })
    .catch(() => {
      loadMoreButton.textContent = "No more posts";
      error();
      throw new Error("Failed to get blogs!");
    });
}

fetchAndDisplayBlogs();

loadMoreButton.addEventListener("click", fetchAndDisplayBlogs);
