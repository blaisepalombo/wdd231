import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.textContent = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;

  const bannerImg = document.querySelector(".hero-banner > img");
  bannerImg.src = data.images[0].url;

  const bannerContent = document.querySelector(".hero-banner__content");
  bannerContent.innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
  enableNavigation();
}
