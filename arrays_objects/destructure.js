// object destructuring - extracts properties from an object into variables

const user = {
    name1: 'Shyam',
    age: 30,
    phone: 888,
};

const name12 = user.name1;

// destructuring of an object
// const { age } = user;
const { name1, phone } = user;
console.log(name1, phone);

// Array destructuring - extracts values from an array into variables

const colors = ['Red', 'Green', 'Blue'];
const [first, third, second] = colors;
console.log(first, second, third);
