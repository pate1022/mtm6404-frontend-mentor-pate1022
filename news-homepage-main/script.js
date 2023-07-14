"use strict";
const open = document.querySelector("#open");
const ul = document.querySelector("nav > ul");
const close = document.querySelector("#close");
console.log(ul);

open.addEventListener("click", () => {
  console.log("I'm being clicked");
  ul.classList.toggle("show");
  close.style.display = "block";
  open.style.display = "none";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  ul.classList.toggle("show");
});