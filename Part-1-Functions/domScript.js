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
