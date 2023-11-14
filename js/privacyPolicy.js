import { wpPages } from "./api.js";

async function getPages() {
  const response = await fetch(wpPages);
  const results = await response.json();

  const privacyContainer = document.querySelector(".privacy-container");

  for (let i = 0; i < results.length; i++) {
    const page = results[0];

    privacyContainer.innerHTML = `<h1>${page.title.rendered}</h1>
                                  <div>${page.content.rendered}</div>`;
  }
}

getPages();
