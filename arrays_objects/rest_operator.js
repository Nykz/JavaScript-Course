// Rest operators - collects remaining elements into an array or object

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...remainingFruits] = fruits;

console.log(first); // Output: apple
console.log(second); // Output: banana
console.log(remainingFruits); // Output: ["cherry", "date"]