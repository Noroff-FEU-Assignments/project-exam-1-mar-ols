import { loader } from "./loader.js";
import { error } from "./error.js";

async function displayIndexBlogs() {
  try {
    loader();
    const response = await fetch(
      "https://blog.m-boe.com/wp-json/wp/v2/posts?per_page=4&order=desc"
    );

    const results = await response.json();

    const getLoaderDiv = document.querySelector(".loader-container");
    getLoaderDiv.innerHTML = " ";

    const getInnerCarousel = document.querySelector(".inner-carousel");

    results.forEach((blog) => {
      getInnerCarousel.innerHTML += `<div class="blog-card">
                                      <div class="blog-img">
                                        <a href="html/single-blog.html?id=${blog.id}&title=${blog.title.rendered}"><img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}" class="blog-thumb"/></a>
                                      </div>
                                      <div>
                                        <p>${blog.title.rendered}</p>
                                        <h4><a href="html/single-blog.html?id=${blog.id}&title=${blog.title.rendered}">Read more..</a></h4>
                                      </div>
                                    </div>`;
    });

    const getDownArrow = document.querySelector(".fa-angle-down");
    const indexContent = document.querySelector(".index-content");

    getDownArrow.addEventListener("click", () => {
      indexContent.scrollIntoView();
    });

    const innerCarousel = document.querySelectorAll(".inner-carousel");
    const nxtBtn = document.querySelectorAll(".nxt-btn");
    const prevBtn = document.querySelectorAll(".prev-btn");

    innerCarousel.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });

      prevBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });
  } catch (e) {
    console.error(e);
    error();
  }
}

displayIndexBlogs();
