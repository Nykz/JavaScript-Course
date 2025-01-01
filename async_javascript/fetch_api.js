// JSON
// {
//     data: {
//         data1: []
//     }
// }
// JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used to exchange data between a client and a server in web applications.

const jsonData = {
    name: "Nikhil",
    age: 30,
    isDeveloper: true,
    skills: ["JavaScript", "Ionic", "Angular"],
    address: {
      city: "Delhi",
      country: "India"
    }
};

// fetch() api
// CRUD - Create Read Update Delete

// Basic get request
async function fetchUserData() {
    try {
        const response = await fetch('https://api.github.com/users/nykz');

        // console.log(response);

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const userData = await response.json();
        console.log(userData);
        return userData;
    } catch(e) {
        console.error(e);
    }
}

fetchUserData();

/*
Fetch API Key Concepts

Basic Request Structure

Uses fetch(url, options) method
Returns a Promise
Handles both successful and failed requests


Request Types

GET (default)
POST
PUT
DELETE
PATCH
HEAD


Request Configuration

Method specification
Headers
Body content
Authentication
Timeout handling


Response Handling

.json() for JSON data
.text() for plain text
.blob() for binary data
.formData() for form submissions


Error Handling

Check response.ok
Catch network and parsing errors
Handle different HTTP status codes
*/

async function createUser(userData) {
    try {
        const token = 'usertoken1';
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData), 
            // JSON.parse(userDataString)
        });

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const newUser = await response.json();
        console.log(newUser);
        return newUser;
    } catch(e) {
        console.error('Create user error: ', e);
    }
}

// advanced error handling & retry mechanism
async function fetchWithRetry(url, options = {}, retries = 3) {
    const maxRetries = retries;

    const fetchWithTimeout = (url, options, timeout = 5000) => {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Requested timed out')), timeout)
            })
        ]);
    };

    for(let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = fetchWithTimeout(url, options);

            if (!response.ok) {
                // Handle different status codes
                switch (response.status) {
                    case 400:
                        throw new Error('Bad Request');
                    case 401:
                        throw new Error('Unauthorized');
                    case 403:
                        throw new Error('Forbidden');
                    case 404:
                        throw new Error('Not Found');
                    case 500:
                        throw new Error('Internal Server Error');
                    default:
                        throw new Error(`HTTP error! status: ${response.status}`);
                }
            }

            return await response.json();
        } catch(error) {
            if(attempt === maxRetries) {
                console.error(`Final attempt failed: ${error.message}`);
                throw error;
            }

            console.warn(`attempt ${attempt} failed: ${error.message}. Retrying...`);

            // exponential backoff
            await new Promise(resolve => 
                setTimeout(
                    resolve, 
                    Math.pow(2, attempt) * 1000
                ) // 2 to the power of attempt
            );
        }
    }
}

// 4. Handling Different Response Types
async function fetchMultipleResourceTypes() {
    try {
        // JSON Request
        const jsonResponse = await fetch('https://api.example.com/data.json');
        const jsonData = await jsonResponse.json();
        console.log('JSON Data:', jsonData);

        // Text Request
        const textResponse = await fetch('https://api.example.com/data.txt');
        const textData = await textResponse.text();
        console.log('Text Data:', textData);

        // Blob (Binary) Request
        const imageResponse = await fetch('https://api.example.com/image.png');
        const imageBlob = await imageResponse.blob();
        
        // Create image URL for display
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log('Image Blob URL:', imageUrl);

        // FormData Request
        const formData = new FormData();
        formData.append('username', 'john_doe');
        formData.append('file', imageBlob, 'profile.png');

        const formResponse = await fetch('https://api.example.com/upload', {
            method: 'POST',
            body: formData
        });
        const uploadResult = await formResponse.json();
        console.log('Upload Result:', uploadResult);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


/*
AJAX with XMLHttpRequest (Legacy Approach)
AJAX (Asynchronous JavaScript and XML) was traditionally implemented using the XMLHttpRequest object to send and receive data from servers asynchronously without refreshing the page.
*/

function makeXHRRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', url, true);
        
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        };
        
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        };
        
        xhr.send();
    });
}

/*
Drawbacks of XMLHttpRequest

1. Verbosity: The code is verbose and harder to read.

2. Lack of Promises: Doesn't support promises natively, making error handling and chaining difficult.

3. Inconsistent APIs: Requires different methods to access headers, response, etc.

4. Modern Features Missing: Doesn't support newer JavaScript features like async/await.
*/


// axios
// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => console.log(response.data))
//   .catch(error => console.error('Error:', error));