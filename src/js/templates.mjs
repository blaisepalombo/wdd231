import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
  return `<div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}" class="media-card__img">
      <h3 class="media-card__title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
  </div>`;
}

function getMailingAddress(addresses) {
  return addresses.find((addr) => addr.type === "Mailing");
}
function getVoicePhone(numbers) {
  const voice = numbers.find((num) => num.type === "Voice");
  return voice.phoneNumber;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div>
      <p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    </div>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>`;
}

export function alertTemplate(alert) {
  let typeClass = alert.category === "Park Closure" ? "closure" : alert.category.toLowerCase();
  return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${typeClass}"></use>
    </svg>
    <div>
      <h3 class="alert-${typeClass}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
    <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
  </li>`;
}

export function activityListTemplate(activities) {
  return activities.map((act) => `<li>${act.name}</li>`).join("");
}

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${iconId}"></use>
  </svg>`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
    <summary>${iconTemplate(iconId)} ${summaryText}</summary>
    ${content}
  </details>`;
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  const img = data.images[0];
  return `<figure>
    <img src="${img.url}" alt="${img.altText}" />
    <figcaption>${img.caption} <span>${img.credit}</span></figcaption>
  </figure>
  <p>${data.description}</p>`;
}

export function listTemplate(data, contentTemplate) {
  return `<ul>${data.map(contentTemplate).join("")}</ul>`;
}

function vcAddressTemplate(addr) {
  return `<section>
    <h3>${addr.type} Address</h3>
    <address>
      ${addr.line1}<br />
      ${addr.city}, ${addr.stateCode} ${addr.postalCode}
    </address>
  </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((a) => a.type === "Physical");
  const mailing = data.find((a) => a.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) html += vcAddressTemplate(mailing);
  return html;
}

export function vcAmenityTemplate(item) {
  return `<li>${item}</li>`;
}

export function vcDirectionsTemplate(text) {
  return `<p>${text}</p>`;
}

export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
    <h3>Email Address</h3>
    <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
  </section>
  <section class="vc-contact__phone">
    <h3>Phone numbers</h3>
    <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
  </section>`;
}

export function vcImageTemplate(img) {
  return `<li><img src="${img.url}" alt="${img.altText}"></li>`;
}
