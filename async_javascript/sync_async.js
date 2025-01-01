// Asynchronous JavaScript refers to the ability of JavaScript to perform tasks without blocking the execution of other code. This feature is crucial for improving the performance and responsiveness of applications, especially when dealing with tasks like fetching data from a server, reading files, or executing timers.

// Sync vs Async

console.log('sync operation 1');
console.log('sync operation 2');
console.log('sync operation 3');


console.log('async operation 1');
setTimeout(() => {
    console.log('async operation 2');
}, 2000); // 1000ms = 1s
console.log('async operation 3');

