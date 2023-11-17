import { wpAPI } from "./functions/api.js";
import { error } from "./functions/error.js";
import { loader } from "./functions/loader.js";

const blogsContainer = document.querySelector(".blogs-container");
const loadMoreButton = document.querySelector(".load-more");

let page = 1;
loader();

async function fetchAndDisplayBlogs() {
  try {
    const response = await fetch(wpAPI + `?page=${page}`);
    const result = await response.json();
    const getLoaderDiv = document.querySelector(".loader-container");
    getLoaderDiv.style.display = "none";
    result.forEach((blog) => {
      const wpDate = blog.date;

      let neaterDate = new Date(wpDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });

      blogsContainer.innerHTML += `<div class="blogs">
                                     <div class="individual-blog-container">
                                       <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">
                                       <h2>${blog.title.rendered}</h2></a>
                                       <div class="blog-featured-image">
                                         <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">
                                         <img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}"></a>
                                       </div>
                                       <div class="excerpt">
                                         <p>${neaterDate}</p>
                                         <p>${blog.excerpt.rendered}</p>
                                         <h3><a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}" class="blog-link">Read more..</a></h3>
                                       </div> 
                                     </div>
                                   </div>`;
    });

    loadMoreButton.textContent = "Load More";
    page++;
  } catch {
    loadMoreButton.textContent = "No more posts";
    error();
    throw new Error("Failed to get blogs!");
  }
}

fetchAndDisplayBlogs();

loadMoreButton.addEventListener("click", fetchAndDisplayBlogs);
