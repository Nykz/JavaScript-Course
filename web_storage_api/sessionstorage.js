// sessionStorage

// store data in sessionStorage
sessionStorage.setItem('cart', '3 items');

const userData123 = {
    name: 'Nikhil',
    country: 'India'
};
sessionStorage.setItem('userData', JSON.stringify(userData123));

// retrieve data from sessionStorage
let cart = sessionStorage.getItem('cart');
console.log(cart);

let userDataString1 = sessionStorage.getItem('userData');
console.log(userDataString1);
let userData1 = JSON.parse(userDataString1);
console.log(userData1);

// remove a specific item
sessionStorage.removeItem('cart');

// clear all data
sessionStorage.clear();

// update item
sessionStorage.setItem('cart', '4 items');