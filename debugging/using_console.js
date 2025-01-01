/*
Debugging in JavaScript 
involves finding and fixing errors or unintended behavior in your code. 

Here are common techniques and tools for debugging effectively:

Using the console
The console object provides methods for logging and inspecting values, errors, and code behavior.
*/

// console.log() - Logs general information
let nme = 'Nikhil';
console.log('Name: ', nme);

// console.error() - Logs errors
console.error('This is an error');

// console.warn() - logs warnings
console.warn('This is a warning');

// console.table() - displays data in a table format
let users = [
    { name: 'Nikhil', age: 30 },
    { name: 'Diya', age: 20 },
];
console.table(users);

// console.time() & console.timeEnd() - measures execution time
console.time('Loop time');
for(let i = 0; i < 100000; i++) {
}
console.timeEnd('Loop time');

