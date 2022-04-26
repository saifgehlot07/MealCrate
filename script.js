"use strict";

const active = document.querySelector(".open");
const deactive = document.querySelector(".close");
const ulSelect = document.querySelector(".list");
const load = document.querySelector(".loader");
const sec_03 = document.querySelector(".food-crates");
const sec_04_left = document.querySelector(".bene-col-left");
const sec_04_right = document.querySelector(".bene-col-right");
const sec_05 = document.querySelector(".ideas");
const kits = document.querySelectorAll(".kit-col");
const heroText = document.querySelectorAll(".hero-content");

active.addEventListener("click", () => {
  ulSelect.classList.toggle("hidden");
  active.classList.add("hidden");
});
deactive.addEventListener("click", () => {
  ulSelect.classList.toggle("hidden");
  active.classList.remove("hidden");
});
window.addEventListener("load", () => {
  load.style.display = "none";
});

ScrollReveal().reveal(sec_03, {
  delay: 500,
  distance: "80px",
  duration: 1500,
});
ScrollReveal().reveal(sec_04_left, {
  delay: 300,
  distance: "80px",
  duration: 1500,
  origin: "left",
});
ScrollReveal().reveal(sec_04_right, {
  delay: 500,
  distance: "80px",
  duration: 1500,
  origin: "right",
});
ScrollReveal().reveal(sec_05, {
  delay: 500,
  distance: "80px",
  duration: 1500,
});
ScrollReveal().reveal(kits, {
  delay: 500,
  distance: "80px",
  duration: 1500,
});
ScrollReveal().reveal(heroText, {
  delay: 500,
  distance: "80px",
  duration: 1500,
  origin: "right",
});
