/*
Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met. They are essential for tasks like iterating over data, automating repetitive actions, or performing calculations.
*/

// for loop - block of code repeatedly...used when number of iterations is known which means Executes a block of code a specific number of times.

for (let i = 1; i <= 5; i++) {
  // i++ -> i = i + 1
  console.log("number: ", i);
}

// while loop - Executes a block of code as long as the condition is true.
let i1 = 1;
while (i1 <= 5) {
  console.log("while loop number: ", i1);
  i1++;
}
// Use Case: When the number of iterations is not fixed, such as reading user input until valid.
// while(true) {
//     console.log('infinite');
// }

// do...while loop
/* Similar to while, but the block executes at least once, 
even if the condition is false.
*/

let j = 1;
do {
  console.log("do while number: ", j);
  j++;
} while (j <= 0);

// Use Case: When you want to perform an action before checking the condition, e.g., showing a menu once before user input validation.

// for...in loop - Iterates over the keys/properties of an object.

const fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
  console.log(fruits[index]);
}

const person1 = {
  name: "Nikhil",
  age: 30,
  country: "India",
};

for (let key in person1) {
  console.log(key, ":", person1[key]);
}
// Use Case: Used for objects, but not suitable for arrays.

// for...of loop - Iterates over values in iterable objects like arrays, strings, or maps.

for (let fruit of fruits) {
  console.log("for of loop: ", fruit);
}

for (const [index, fruit] of fruits.entries()) {
  // The entries() method returns an iterator that contains both the index and the value.
  console.log(`Index: ${index}, Value: ${fruit}`);
}

const word = "hello";
for (let char of word) {
  console.log(char);
}

const user = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "Paris"],
]);

for (let [key, value] of user) {
  console.log(`${key} : ${value}`);
}

// advanced concepts in loops
// break statement - exit the loop immediately when break condition is met
for (let k = 0; k <= 10; k++) {
  if (k === 5) break;

  console.log(k); // 0, 1, 2, 3, 4
}

// continue statement - skip the current iteration and moves to next one
console.log("continue statement");
for (let k1 = 0; k1 <= 10; k1++) {
  if (k1 === 5) continue;

  console.log(k1); // 0, 1, 2, 3, 4, 6, 7, 8, 9, 10
}

// nested loops - loops within loops
for (let a = 1; a <= 3; a++) {
  for (let b = 1; b <= 2; b++) {
    console.log(`a: ${a}, b: ${b}`);
  }
}

/*
Choosing the Right Loop
* Use for -  when you know the number of iterations.
* Use while - when the number of iterations depends on a condition.
* Use do...while - when the code must execute at least once.
* Use for...in - for objects.
* Use for...of - for arrays, strings, or other iterables. 
*/

// examples
// Countdown timer using a for loop
for (let i = 5; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}
console.log("Go!");

// while loop
let savings = 0;
const target = 500; // Target savings amount

while (savings < target) {
  savings += 100; // Adding money
  console.log(`Current savings: $${savings}`);
}
console.log("Target reached!");

// do-while loop
let energy = 3;

do {
  console.log("Playing the game...");
  energy--;
} while (energy > 0);

console.log("Game over. I'm tired!");

// Break
const books = ["Math", "Science", "History", "English"];
const bookToFind = "History";

for (let i = 0; i < books.length; i++) {
  console.log(i);
  if (books[i] === bookToFind) {
    console.log(`Found the book: ${books[i]}`);
    break; // Stop the loop when the book is found
  }
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(`Odd number: ${i}`);
}

// Nested loops
for (let row = 1; row <= 3; row++) {
  for (let seat = 1; seat <= 3; seat++) {
    console.log(`Row ${row}, Seat ${seat}`);
  }
}

console.log([] == ![]);