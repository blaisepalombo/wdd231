import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();

function showParkIntro(data) {
  const introSection = document.querySelector(".intro");
  introSection.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function showParkLinks(links) {
  const infoSection = document.querySelector(".info");
  const cards = links.map(mediaCardTemplate);
  infoSection.insertAdjacentHTML("afterbegin", cards.join(""));
}

setHeaderFooter(parkData);
showParkIntro(parkData);
showParkLinks(parkInfoLinks);
