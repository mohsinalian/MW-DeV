"use strict";

const section1Container = document.querySelector(".section--1-container");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const title = document.querySelector(".Web-title");
const headerContainer = document.querySelector(".header-container");
const nav = document.querySelector(".nav");

const allSections = [...document.querySelectorAll(".section")];
console.log(allSections);

let wheeldirection;
let scrollToSec;

// function isInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// const scrollToEl = function () {
//   title.classList.remove("slide-in-right");
//   allSections.forEach((section, i) => {
//     if (isInViewport(section)) {
//       console.log(section);
//       console.log("working");

//       if (wheeldirection < 0) {
//         let a;
//         a > 0 ? a : (a = i - 1);
//         console.log(a);
//         scrollToSec = allSections[a];
//       } else {
//         let a;
//         a <= 3 ? a : (a = i + 1);

//         console.log(a);
//         scrollToSec = allSections[a];
//       }

//       scrollToSec?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   });
// };
// window.addEventListener("wheel", function (e) {
//   wheeldirection = e.deltaY;
//   title.classList.remove("slide-in-right");

//   //   scrollToEl();
// });
window.addEventListener("scroll", function (e) {
  const y = window.pageYOffset;

  headerContainer.style.top = y + "px";
});

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link--btn")) return;
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
