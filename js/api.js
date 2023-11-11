import { loader } from "./loader.js";

export const wpAPI = "https://www.m-boe.com/wp-json/wp/v2/posts";
export const wpPages = "https://www.m-boe.com/wp-json/wp/v2/pages";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

export const id = params.get("id");

export const title = params.get("title");

const singleBlogAPI = wpAPI + `/` + id;

export async function fetchBlog() {
  loader();
  const response = await fetch(singleBlogAPI);

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error("Failed to get blog!");
  }
}
