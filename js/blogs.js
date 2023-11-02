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
                                        <a href="single-blog.html?id=${blog.id}&title=${blog.title.rendered}" class="">Click to see more..</a>
                                      </div>
                                    </div>  
                                  </div>`;
    });
  } catch {}
}

displayBlogs();
