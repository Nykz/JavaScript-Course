// Spread operators - expands elements of an array or object

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 3, 4]; // arr1 - copy & values extracted
console.log(arr2);
// const arr3 = arr1;
const arr3 = [...arr1];

const obj = { a: 1, b: 2 };
const obj1 = { b: 1, c: 3 };
const obj2 = { a: 0, ...obj, ...obj1, d: 4, c: 5 };

// const obj2 = { a: 0, a: 1, b: 2, b: 1, c: 3, d: 4, c: 5 };
// obj2 = { a: 1, b: 1, c: 5, d: 4 }
console.log(obj2);
