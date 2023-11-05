import { fetchPosts } from "./api.js";

async function displayBlogs() {
  try {
    const blogs = await fetchPosts();
    const blogContainer = document.querySelector(".blogs-container");
    blogs.forEach((blog) => {
      blogContainer.innerHTML += `<div class="blogs">
                                    <div class="individual-blog-container">
                                      <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">
                                      <h1>${blog.title.rendered}</h1></a>
                                      <div class="blog-featured-image">
                                        <img src="${blog.better_featured_image.source_url}" alt="${blog.better_featured_image.alt_text}">
                                      </div>
                                      <div class="excerpt">
                                        <p>${blog.date}</p>
                                        <p>${blog.excerpt.rendered}</p>
                                        <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}">Click to see more..</a>
                                      </div>
                                    </div> 
                                  </div>`;
    });

    const getLoadMore = document.querySelector(".load-more");

    // getLoadMore.addEventListener("click", () => {
    //   async function tenMore() {
    //     const response = await fetch(
    //       "https://blog.m-boe.com/wp-json/wp/v2/posts?per_page=2&offset=2"
    //     );

    //     const result = await response.json();
    //     blogContainer.innerHTML += `${result}`;
    //   }
    //   tenMore();
    // });

    // const getBlogDate = document.querySelector(".excerpt").children;
    // const getFirstChild = getBlogDate[0];
    // console.log(getFirstChild);
  } catch {}
}

displayBlogs();
