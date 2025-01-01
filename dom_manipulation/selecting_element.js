// <!-- DOM (Document Object Model): Structure representing the HTML of a webpage, allowing JavaScript to manipulate page elements. -->

// getElementById() 
// Selects an element by its id.
// Returns a single DOM element 

const greeting = document.getElementById("greeting");
console.log(greeting.textContent);

// getElementsByClassName()
// Select elements by their class.
// Returns a live HTMLCollection (array-like object)

const items = document.getElementsByClassName('item');
console.log(items[0].textContent);

// getElementsByTagName()
// Select elements by their tag name
// Returns a live HTMLCollection
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[1].textContent);

// querySelector()
// Selects the first matching element using a CSS selector

const special = document.querySelector('.container #special');
console.log(special.textContent);

// querySelectorAll()
// Selects all matching elements using a CSS selector
// Returns a NodeList (not live, unlike HTMLCollection)

const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);
menuItems.forEach((item) => console.log(item.textContent));
