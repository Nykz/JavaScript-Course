// form validation
const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);

    if(!username || !password) {
        alert('All fields are required');
    }
});

// input processing
const inputField = document.getElementById('username');
inputField.addEventListener('input', () => {
    console.log(`Current value: ${inputField.value}`);
});

// real-time validation
const emailInput = document.getElementById('email');
const message = document.getElementById('validationMessage');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    
    if(email.includes('@') && email.includes('.')) {
        message.textContent = 'Valid email';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid email';
        message.style.color = 'red';
    }
});