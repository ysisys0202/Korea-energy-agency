"use strict";

const nav = document.querySelector(".global-nav");
const overlay = document.querySelector(".dropdown-overlay");

function activateDropdown() {
  nav.classList.add("is-active");
  overlay.classList.add("is-active");
}
function inactivateDropdown() {
  nav.classList.remove("is-active");
  overlay.classList.remove("is-active");
}
function navOverHandler() {
  activateDropdown();
}
function navLeaveHandler() {
  inactivateDropdown();
}
nav.addEventListener("mouseover", navOverHandler);
nav.addEventListener("mouseleave", navLeaveHandler);
overlay.addEventListener("mouseover", navOverHandler);
overlay.addEventListener("mouseleave", navLeaveHandler);
