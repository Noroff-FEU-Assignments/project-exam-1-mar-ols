import { fetchBlog } from "./api.js";

export async function makeNewDate() {
  const singleBlog = await fetchBlog();
  const wpDate = singleBlog.date;

  let neaterDate = new Date(wpDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return neaterDate;
}
