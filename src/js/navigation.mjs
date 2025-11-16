function mainMenuHandler(ev) {
  let btn = ev.target;

  document.querySelector(".global-nav").classList.toggle("show");

  if (btn.tagName !== "BUTTON") {
    btn = btn.closest("button");
  }

  const isOpen = document.querySelector(".global-nav").classList.contains("show");
  btn.setAttribute("aria-expanded", isOpen);
}

function subMenuHandler(ev) {
  const li = ev.currentTarget.closest("li");
  const submenu = li.querySelector(".global-nav__submenu");

  submenu.classList.toggle("show");
  ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");

  menuButton.addEventListener("click", mainMenuHandler);

  subMenuToggles.forEach((btn) => {
    btn.addEventListener("click", subMenuHandler);
  });
}
