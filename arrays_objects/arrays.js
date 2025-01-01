const fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits[1]);

// push() - add a new element in array
const nums = [1, 2, 3];
nums.push(4);

console.log(nums);

// pop() - removes last element in array
nums.pop();
console.log(nums);

// map() - creates a new array by applying a function to each element

const squared = nums.map((num) => num * num);
console.log(squared);

// filter() - filters elements based on a condition
const ages = [18, 20, 15, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);

// reduce() - reduces an array to a single value by applying a function
const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);