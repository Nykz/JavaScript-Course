// Event Loop and Concurrency

// Problem: Blocking the Event Loop

// JavaScript’s single-threaded nature causes the UI to freeze when synchronous operations block the event loop.

console.log('Start');

for (let i = 0; i < 1e9; i++) { // 1 * (10 ** 9)
  // Heavy computation
}

console.log('End');

// Impact: Long tasks block the thread, making the application unresponsive.

// Optimization Solution:
// You can break the computation into smaller pieces using setTimeout(), setImmediate(), or Web Workers to avoid blocking the main thread.

console.log('Start');

function heavyComputation(i) {
  if (i < 1e9) {
    // Perform a part of the task
    setTimeout(() => heavyComputation(i + 1), 0); // Yield back to the event loop
  } else {
    console.log('End');
  }
}

// * Solution: This optimizes the code by breaking the heavy computation into smaller chunks, allowing the UI to remain responsive.