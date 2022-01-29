const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("nav-menu_visible")

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Close Menu");
      } else {
        navToggle.setAttribute("aria-label", "Open Menu");
      }
    });

body.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
  });

