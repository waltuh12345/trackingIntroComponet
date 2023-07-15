import "../scss/main.scss";
import "animate.css";
import { animate } from "./helper/animation";
import AOS from "aos";
import "aos/dist/aos.css";

const loadingWrapper = document.querySelector(".loading-wrapper");
const body = document.querySelector("body");

Promise.all([
  import("./components/toggle-theme"),
  import("./components/nav"),
  import("./components/main-col1"),
  import("./components/menu"),
])
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        loadingWrapper.style.display = "none";
        AOS.init();
        resolve("finished loading");
      });
    });
  })
  .then(() => animate(body, "fadeIn"));
