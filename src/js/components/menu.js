import { animate, isAnimating } from "../helper/animation";
const menuToggle = document.querySelector("#menu-toggle");
const body = document.querySelector("body");

menuToggle.addEventListener("click", (e) => {
  if (isAnimating) {
    return;
  }

  menuToggle.classList.toggle("active");

  const arg = menuToggle.classList.contains("active");
  const menu = menuToggle.nextElementSibling;
  const content = menu.querySelector(".menu-container");

  const elemDisplay = (elem, display) => (elem.style.display = display);
  const isScrollable = (arg) => {
    if (arg) {
      body.classList.remove("hide-scrollbar");
    } else {
      body.classList.add("hide-scrollbar");
    }
  };

  if (arg) {
    isScrollable(false);
    elemDisplay(content, "none");
    elemDisplay(menu, "block");
    animate(menu, "fadeIn", 500).then(() => {
      elemDisplay(content, "");
      animate(content, "zoomIn", 800);
    });
  } else {
    isScrollable(true);
    animate(content, "zoomOut", 800)
      .then(() => {
        elemDisplay(content, "none");
      })
      .then(() => animate(menu, "fadeOut", 500))
      .then(() => {
        elemDisplay(content, "");
        elemDisplay(menu, "");
      });
  }

  window.addEventListener("resize", (e) => {
    const arg2 = window.innerWidth;

    if (arg2 >= 768) {
      elemDisplay(menuToggle, "none");
      isScrollable(true);
    } else {
      elemDisplay(menuToggle, "");
    }

    if (arg && arg2 <= 768) {
      isScrollable(false);
    } else if (!arg) {
      isScrollable(true);
    }
  });
});
