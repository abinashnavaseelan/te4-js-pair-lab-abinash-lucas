"use strict";

console.log("Welcome to the Abinash & Lucas's Te4 Pair Project.");

////////////////////////////////////////////////////////////// *
// * 🧱 Part 3 – DOM Manipulation

const list = document.getElementById("itemList");
const button = document.getElementById("addBtn");

let count = 1;

button.addEventListener("click", () => {
  count++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${count}`;
  list.appendChild(newItem);
});
