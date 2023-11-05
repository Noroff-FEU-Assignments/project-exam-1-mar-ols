async function displayIndexBlogs() {
  const response = await fetch(
    "https://blog.m-boe.com/wp-json/wp/v2/posts?per_page=4&order=desc"
  );

  const results = await response.json();

  const getInnerCarousel = document.querySelector(".inner-carousel");

  results.forEach((blog) => {
    getInnerCarousel.innerHTML += `<div class="blog-card">
                                  <div class="blog-img">
                                    <img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}" class="blog-thumb"/>
                                    <a href="html/single-blog.html?id=${blog.id}&title=${blog.title.rendered}">Click to read</a>
                                  </div>
                                  <div>
                                    <h3>${blog.title.rendered}</h3>
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
}

displayIndexBlogs();
