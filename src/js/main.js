import { getParkData } from "./parkService.mjs";

const park = getParkData();

// disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = park.url;
disclaimer.textContent = park.fullName;

// page title
document.title = park.fullName;

// hero image
const heroImg = document.querySelector(".hero-banner img");
heroImg.src = park.images[0].url;
heroImg.alt = park.images[0].altText;

// hero info
function heroTemplate(p) {
  return `
    <a href="#" class="hero-banner__title">${p.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${p.designation}</span>
      <span>${p.states}</span>
    </p>
  `;
}

const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = heroTemplate(park);
