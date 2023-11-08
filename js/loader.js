const loaderHtml = `<div class="loader-container">
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                    </div>`;

export function loader() {
  const loaderContainer = document.createElement("div");
  loaderContainer.innerHTML = loaderHtml;

  const main = document.querySelector(".loader");
  main.appendChild(loaderContainer);
}
