/* Practice Problems:

* Problem 1: 
Write a function that takes two numbers 
and returns their sum
*/

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5

// Problem 2: Write a function that accepts an array and a function as arguments, and applies the function to each element in the array.

function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach([1, 2, 3], function(num) {
    console.log(num * num); // 1 4 9
});