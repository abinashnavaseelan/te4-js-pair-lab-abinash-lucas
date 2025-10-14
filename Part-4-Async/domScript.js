"use strict";

console.log("Welcome to the Abinash & Lucas's Te4 Pair Project.");

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
