const g='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill-rule="evenodd"><path d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z"/></g></svg>',e={svg:g,links:[{brand:"PRODUCT",path:"#"},{brand:"FEATURES",path:"#"},{brand:"PRICING",path:"#"}]},n=document.querySelector(".nav-container");let t="";const l={logo:n.querySelector(".logo").querySelector("a"),ul:n.querySelector("ul")};e.links.forEach(o=>{const{brand:a,path:r}=o;t+=`
    <li><a href="${r}">${a}</a></li>
  `});l.logo.innerHTML=e.svg;l.ul.innerHTML=t;
