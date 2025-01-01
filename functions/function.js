// function declaration 

// function - reusable blocks of code

function functionName(parameters) { // parameters/arguements
    // block of code
}

function greet() {
    console.log('Hello world');
}

greet();

// parameter function
function greetings(message) {
    console.log(message);
}

greetings('Hi');


// Function expressions
const greet1 = function() {
    console.log('Hello!');
}
const greet2 = function(username) {
    console.log('Hello!', username);
}

// console.log(greet1);
greet1();
greet2('Ram');
greet2('Shyam');

// arrow functions - Simplified syntax for functions
// const add = (a, b) => {
//     return (a + b);
// };
const add = (a, b) => a + b;

console.log(add(5, 2)); // 7

// default parameters in functions
const greet3 = function(username = 'Krishna') {
    console.log('Hello!', username);
}

greet3();
greet3('Ram2');


// higher-order functions & callbacks
// a function that accepts another function as an arguement - higher-order function
// let array1 = [1, 2];

function processArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let array1 = [1, 2];
processArray(array1, function(num) {
    console.log(num * 2); // 2, 4
});

function multiplyNumbers(num) {
    console.log(10 * num); 
}

processArray(array1, multiplyNumbers);

// scope, closure
// scope - Accessibility of variables (global, local & block)
// closure - Function that remembers its outer variables

// let a = 5; // global
function outer() {
    let count = 0; // local
    // a = 10;
    return function inner() {
        count++;
        console.log(`Count: ${count}`);
        // let x = 3; // block
    };
}

let counter = outer(); // `counter` is assigned the inner() function with a closure over `count`
counter(); // Logs "Count: 1"
counter(); // Logs "Count: 2"
counter(); // Logs "Count: 3"

// IIFE (Immediately Invoked Function Expression):

(function() {
    console.log('IIFE');
})();

// Currying
// Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument.

const addNums = a => b => a + b;
console.log(addNums(5)(3));