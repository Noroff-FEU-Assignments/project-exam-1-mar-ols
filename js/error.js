const errorHtml = `<div class="error">
                        <p><img src="../images/assets/detective-right.png" alt="Icon of a detective." class="sherlock">
                        Hmm.. it appears something is amiss!
                        <img src="../images/assets/detective.png" alt="Icon of a detective." class="sherlock"></p>
                        <p>Something seems to have gone wrong, please try again while Sherlock looks for clues.</p>
                     </div>`;

export function error() {
  const errorContainer = document.createElement("div");
  errorContainer.innerHTML = errorHtml;

  const main = document.querySelector(".errors");
  main.appendChild(errorContainer);
}
