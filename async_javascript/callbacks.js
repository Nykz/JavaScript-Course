// Callbacks
// A callback is a function passed into another function as an argument.
// Oldest method of handling asynchronous operations
// Can lead to "callback hell" with nested operations
// Limited error handling

// Example shows a simple user data fetch with a callback
function fetchUserData(userId, callback) {
    setTimeout(() => {
        if(userId) {
            const user = {
                id: userId,
                name: 'Ram',
                email: 'ram@example.com'
            };

            callback(null, user);
        } else {
            callback(new Error('Invalid User ID'));
            // callback(new Error('Invalid User ID'), null);
        }
    }, 1000);
}

// callback usage
fetchUserData(1, (error, user) => {
    if(error) {
        console.log('Error fetching user: ', error);
    } else {
        console.log('user: ', user);
    }
});