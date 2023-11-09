import { loader } from "./loader.js";
import { error } from "./error.js";

async function displayIndexBlogs() {
  try {
    loader();
    const response = await fetch(
      "https://blog.m-boe.com/wp-json/wp/v2/posts?per_page=5&order=desc"
    );

    const results = await response.json();

    const getLoaderDiv = document.querySelector(".loader-container");
    getLoaderDiv.innerHTML = " ";

    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".nxt-btn");
    let currentIndex = 0;

    results.forEach((blog) => {
      carousel.innerHTML += `<div class="carousel-item">
                               <div>
                                 <a href="html/single-blog.html?id=${blog.id}&title=${blog.title.rendered}"><img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}" class="blog-thumb"/></a>
                               </div>
                               <div>
                                 <p>${blog.title.rendered}</p>
                                 <h4><a href="html/single-blog.html?id=${blog.id}&title=${blog.title.rendered}">Read more..</a></h4>
                               </div>
                             </div>`;
    });

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  } catch (e) {
    console.error(e);
    error();
  }
}

displayIndexBlogs();
