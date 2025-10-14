"use strict";

console.log("Welcome to the Abinash & Lucas's Te4 Pair Project.");

////////////////////////////////////////////////////////////// *
// * 🧩 Part 1 – Functions & Closures

function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}

// Test
const counter = createCounter();
counter.increment();
counter.increment();
console.log("Count:", counter.getCount());

////////////////////////////////////////////////////////////// *
// * 🧮 Part 2 – Arrays Deep Dive

const students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 67 },
  { name: "Charlie", score: 88 },
  { name: "Diana", score: 72 },
  { name: "Eve", score: 60 },
  { name: "Frank", score: 98 },
];

const passingStudents = students.filter((s) => s.score > 70);

const averageScore =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;

const top3 = [...students]
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map((s) => s.name);

console.log("Passing Students:", passingStudents);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Top 3 Students:", top3);

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

////////////////////////////////////////////////////////////// *
// * 🌐 Part 4 – Async JS + JSON + APIs

async function fetchJoke() {
  const jokeContainer = document.createElement("p");
  document.body.appendChild(jokeContainer);

  try {
    jokeContainer.textContent = "Loading joke...";
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    if (!response.ok) throw new Error("Failed to fetch joke");

    const data = await response.json();
    console.log("Joke:", data.value);

    jokeContainer.textContent = data.value;
  } catch (err) {
    console.error("Error fetching joke:", err.message);
  }
}

fetchJoke();

////////////////////////////////////////////////////////////// *
