import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function updateHeader(data) {
  const disc = document.querySelector(".disclaimer > a");
  disc.href = data.url;
  disc.textContent = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function updateFooter(data) {
  const footer = document.querySelector("#park-footer");
  footer.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  updateHeader(parkData);
  updateFooter(parkData);
}
