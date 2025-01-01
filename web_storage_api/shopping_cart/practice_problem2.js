// Practice Problem 2: Shopping Cart (Persisting Cart Data)
// Problem: Create a simple shopping cart where users can add and remove items. The cart data should be saved in localStorage so that even if the user refreshes the page or returns later, the cart data persists.
// Steps:
// * Create a shopping cart with a list of items and a button to add items to the cart.
// * Allow the user to remove items from the cart.
// * Save the cart data (items in the cart) in localStorage so that it persists even after page refresh.

function getCart() {
    const cartData = localStorage.getItem('cart');
    const cart = JSON.parse(cartData) || [];
    return cart;
}

function loadCart() {
    // const cartData = localStorage.getItem('cart');
    // const cart = JSON.parse(cartData) || [];
    const cart = getCart();

    console.log(cart);

    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItemFromCart(index);

        listItem.appendChild(removeButton);

        cartItemsList.appendChild(listItem);
    });
}

function addItemToCart(item) {
    // const cartData = localStorage.getItem('cart');
    // const cart = JSON.parse(cartData) || [];
    const cart = getCart();

    cart.push(item);

    localStorage.setItem('cart', JSON.stringify(cart));

    loadCart(); // reload the cart ui
}

function removeItemFromCart(index) {
    // const cartData = localStorage.getItem('cart');
    // const cart = JSON.parse(cartData) || [];
    const cart = getCart();

    cart.splice(index, 1); // remove item from cart

    localStorage.setItem('cart', JSON.stringify(cart));

    loadCart(); // reload the cart ui
}

window.onload = loadCart();