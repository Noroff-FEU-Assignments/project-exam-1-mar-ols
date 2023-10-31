const wpAPI = "https://blog.m-boe.com/wp-json/wp/v2/posts";

export async function fetchPosts() {
  const response = await fetch(wpAPI);

  const result = await response.json();

  if (response.ok) {
    return result;
  } else {
    throw new Error("Failed to get blogs!");
  }
}
fetchPosts();
