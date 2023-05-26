// Home.js

export function Home() {
  const section = document.createElement("section");

  const img = document.createElement("img");
  img.src = require("../img/Home.png");

  img.style.width = "50%";
  img.style.display = "block";
  img.style.marginLeft = "auto";
  img.style.marginRight = "auto";

  const homeText = document.createElement("p");
  homeText.className = "home-text";
  homeText.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  section.innerHTML = `
    <h2>Home</h2>
    `;

  section.append(img);
  section.appendChild(homeText);

  return section;
}
