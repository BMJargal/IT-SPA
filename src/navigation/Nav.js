// Nav.js

import { NavButton } from "../common/NavButton";
import { Cart } from "../views/Cart";
import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { SpaList } from "../views/SpaList";
import { Rejestracja } from "../views/Rejestracja";
import { LogIn } from "../views/Login";

const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms", component: RoomList },
  { name: "SPA", component: SpaList },
  { name: "🛒", component: Cart },
  { name: "Signup", component: Rejestracja },
  { name: "Login", component: LogIn },
];

export function Nav() {
  const img = document.createElement("img");
  img.src = require("../img/sun.png");
  img.style.width = "8vw";
  const nav = document.createElement("nav");

  const navButtons = navItems.map((navItem) => {
    return NavButton(navItem.name, navItem.component, ["btn"]);
  });

  nav.append(img, ...navButtons);

  return nav;
}
