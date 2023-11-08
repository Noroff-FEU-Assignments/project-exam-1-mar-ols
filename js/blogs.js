import { fetchPosts } from "./api.js";
import { error } from "./error.js";

async function displayBlogs() {
  try {
    const blogs = await fetchPosts();
    const getLoaderDiv = document.querySelector(".loader-container");
    getLoaderDiv.innerHTML = " ";
    const blogContainer = document.querySelector(".blogs-container");
    blogs.forEach((blog) => {
      blogContainer.innerHTML += `<div class="blogs">
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
  } catch (e) {
    console.error(e);
    error();
  }
}

displayBlogs();
