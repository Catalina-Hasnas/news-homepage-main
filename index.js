// const navDialog = document.getElementById("navigation-dialog");

// // "Show the dialog" button opens the dialog modally
// openMenuButton.addEventListener("click", () => {
//   navDialog.showModal();
// });

// // "Close" button closes the dialog
// closeMenuButton.addEventListener("click", () => {
//   navDialog.close();
// });

const toggleMenuButton = document.getElementById("toggle-menu");
const navBar = document.querySelector("nav");
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");

function toggleMobileMenu() {
  navBar.classList.toggle("expanded");

  if (navBar.classList.contains("expanded")) {
    toggleMenuButton.setAttribute("aria-expanded", true);
    toggleMenuButton.replaceChildren(closeMenuButton.content.cloneNode(true));
    return;
  }
  toggleMenuButton.setAttribute("aria-expanded", false);
  toggleMenuButton.replaceChildren(openMenuButton.content.cloneNode(true));
}

document
  .getElementById("toggle-menu")
  .addEventListener("click", toggleMobileMenu);
