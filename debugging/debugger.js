// debugger statement - The debugger statement pauses code execution at a specific point, opening debugging tools in the browser.

let x = 10;
debugger; // opens debugger at this line
x += 5;
console.log(x);

function calculateSum(a, b) {
debugger; // Execution will pause here
  return a + b;
}

console.log(calculateSum(5, 10));