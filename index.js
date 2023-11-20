const toggleMenuButton = document.getElementById("toggle-menu");
const navBar = document.querySelector("nav");
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const backdrop = document.getElementById("backdrop");

const toggleMobileMenu = () => {
  navBar.classList.toggle("expanded");
  backdrop.classList.toggle("backdrop");

  if (navBar.classList.contains("expanded")) {
    toggleMenuButton.setAttribute("aria-expanded", true);
    toggleMenuButton.replaceChildren(closeMenuButton.content.cloneNode(true));
    return;
  }
  toggleMenuButton.setAttribute("aria-expanded", false);
  toggleMenuButton.replaceChildren(openMenuButton.content.cloneNode(true));
};

document
  .getElementById("toggle-menu")
  .addEventListener("click", toggleMobileMenu);
