/*
Practice problems

1. Write a program to check if a number is positive, negative, or zero.
*/

let num = -1;

if(num > 0) {
    console.log('Positive number');
} else if(num < 0) {
    console.log('Negative number');
} else {
    console.log('Zero');
}


// 2. Write a program to print numbers from 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. Create a simple program that handles a division by zero error.
try {
    let result = 10 / 0; // Error: Division by zero
    console.log(result);
} catch(error) {
    // console.log('error', error.message);
    console.log('error', error);
}