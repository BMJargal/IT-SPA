// Home.js

export function Home() {
  const section = document.createElement("section");

  const Logo = document.createElement("Logo");
  Logo.src = require("../assets/support.png");
  Logo.style.width = "10vw"; // vw = view width

  section.innerHTML = `
    <h2>Home</h2>
  
    <h3>Witaj w IT SPA!</h3>
    
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
    

    <div>
		<div class="car car1"></div>
		<div class="text-center caption">
	
	</div>


  `;

  section.append(Logo);

  return section;
}
