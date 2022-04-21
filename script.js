"use strict";

const active = document.querySelector(".open");
const deactive = document.querySelector(".close");
const ulSelect = document.querySelector(".list");
const load = document.querySelector(".loader");

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
