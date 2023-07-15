import { navData } from "./nav-data";

const navContainer = document.querySelector(".nav-container");
let navHtml = "";

const navElem = {
  logo: navContainer.querySelector(".logo").querySelector("a"),
  ul: navContainer.querySelector("ul"),
};

navData.links.forEach((link) => {
  const { brand, path } = link;

  navHtml += `
    <li><a href="${path}">${brand}</a></li>
  `;
});

navElem.logo.innerHTML = navData.svg;
navElem.ul.innerHTML = navHtml;
