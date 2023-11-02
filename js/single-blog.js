import { fetchBlog } from "./api.js";

async function displaySingleBlog() {
  const blog = await fetchBlog();

  const singleBlogContainer = document.querySelector(".single-blog-container");
  console.log(singleBlogContainer);

  singleBlogContainer.innerHTML = `<div class="single-blog">
                                     <h1>${blog.title.rendered}</h1>
                                     <div>
                                       <p>${blog.date}</p>
                                       <p>${blog.content.rendered}</p>
                                     </div>
                                   </div>`;
}

displaySingleBlog();
