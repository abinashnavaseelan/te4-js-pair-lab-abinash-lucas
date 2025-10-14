"use strict";

console.log("Welcome to the Abinash & Lucas's Te4 Pair Project.");

////////////////////////////////////// *
// * 🧰 Part 5 – Error Handling & Debugging

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (err) {
    console.error("Custom Error: " + err.message);
    throw new Error("safeDivide failed: " + err.message);
  }
}

try {
  console.log(safeDivide(10, 2)); // 5
  console.log(safeDivide(10, 0)); // Will throw and log error
} catch (e) {
  console.error("Caught in outer scope:", e.message);
}
