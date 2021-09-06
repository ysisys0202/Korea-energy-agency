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
function navMouseOverHandler(e) {
  const target = e.target;
  if (target.matches(".dropdown")) {
    activateDropdown();
  }
}
function navMouseLeaveHandler() {
  inactivateDropdown();
}
function overlayMouseOverHandler() {
  activateDropdown();
}
function overlayMouseLeaveHandler() {
  inactivateDropdown();
}
nav.addEventListener("mouseover", navMouseOverHandler);
nav.addEventListener("mouseleave", navMouseLeaveHandler);
overlay.addEventListener("mouseover", overlayMouseOverHandler);
overlay.addEventListener("mouseleave", overlayMouseLeaveHandler);
