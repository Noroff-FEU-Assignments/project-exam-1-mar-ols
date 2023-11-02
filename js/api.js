const wpAPI = "https://blog.m-boe.com/wp-json/wp/v2/posts/";
const pagesAPI = "https://blog.m-boe.com/wp-json/wp/v2/pages/";

export async function fetchPosts() {
  const response = await fetch(wpAPI);

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw new Error("Failed to get blogs!");
  }
}

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

export const title = params.get("title");

const singleBlogAPI = wpAPI + id;

export async function fetchBlog() {
  const response = await fetch(singleBlogAPI);

  const result = await response.json();

  return result;
}
