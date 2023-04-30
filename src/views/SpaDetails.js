// SpaDetails.js

import { NavButton } from "../common/NavButton";
import { cartManager } from "../cart/cart-manager";
import { SpaList } from "./SpaList";

export function SpaDetails(treatmentId) {
  const section = document.createElement("section");

  section.innerHTML = `
      <h2>Zabieg</h2>
      <p class="loading">Ładuję zabieg...</p>
    `;

  // pobieramy wybrany pokoj z serwera
  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      const details = document.createElement("article");

      details.innerHTML = `
            <h3>${treatment.name}</h3>
            <p>Partie masażu: ${treatment.area}</p>
            <p>Czas: ${treatment.time}</p>
            <p>
              <strong>${treatment.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

      const addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Add to cart";
      addToCartButton.classList.add("btn");
      addToCartButton.addEventListener("click", () =>
        cartManager.addItem(treatment)
      );
      const ReturnButton = NavButton("Return...", () => SpaList(treatment.id), [
        "btn",
      ]);
      details.querySelector("footer").append(addToCartButton, ReturnButton);

      // usuwamy element mowiacy o ladowaniu
      section.querySelector(".loading").remove();
      // podstawiamy gotowa liste z pokojami
      section.append(details);
    });

  return section;
}
