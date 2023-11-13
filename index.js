const toggleMenuButton = document.getElementById("toggle-menu");
const navBar = document.querySelector("nav");
const menu = document.getElementById("menu");
const backdrop = document.getElementById("backdrop");

function toggleMobileMenu() {
  if (!navBar.classList.contains("expanded")) {
    navBar.classList.add("expanded");
    toggleMenuButton.innerHTML = `
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        `;
    menu.classList.remove("display-none");
    backdrop.classList.add("backdrop");
    toggleMenuButton.setAttribute("aria-expanded", true);
  } else {
    navBar.classList.remove("expanded");
    toggleMenuButton.innerHTML = `
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
              <path d="M0 0h40v3H0z" />
            </g>
          </svg>
        `;
    menu.classList.add("display-none");
    backdrop.classList.remove("backdrop");
    toggleMenuButton.setAttribute("aria-expanded", false);
  }
}

const handleResize = () => {
  const articleImage = document.getElementById("article-image");

  if (window.matchMedia("(max-width: 375px)").matches) {
    menu.classList.add("display-none");
    menu.classList.add("flex-direction-column");
    toggleMenuButton.classList.remove("display-none");
    articleImage.src = "assets/images/image-web-3-mobile.jpg";
  } else {
    menu.classList.remove("display-none");
    menu.classList.remove("flex-direction-column");
    toggleMenuButton.classList.add("display-none");
    articleImage.src = "assets/images/image-web-3-desktop.jpg";
  }
};

window.addEventListener("resize", handleResize);
document
  .getElementById("toggle-menu")
  .addEventListener("click", toggleMobileMenu);

handleResize();
