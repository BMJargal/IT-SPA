// SpaList.js

import { SpaDetails } from "./SpaDetails";
import { NavButton } from "../common/NavButton";
import { cartManager } from "../cart/cart-manager";

export function SpaList() {
  const section = document.createElement("section");
  const ul = document.createElement("ul");

  section.innerHTML = `
    <h2>Spa List</h2>
    <p>Sprawdź ofertę naszych zabiegów.</p>
    <p class="loading">Ładuję listę zabiegów...</p>
  `;

  // pobieramy liste pokoi z serwera
  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const lis = treatments.map((treatment) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <h4>${treatment.name}</h4>
            <p>
            
            </p>
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
        const detailsButton = NavButton(
          "Read more...",
          () => SpaDetails(treatment.id),
          ["btn"]
        );

        li.querySelector("footer").append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);

      // usuwamy element mowiacy o ladowaniu
      section.querySelector(".loading").remove();
      // podstawiamy gotowa liste z pokojami
      section.append(ul);
    });

  return section;
}
