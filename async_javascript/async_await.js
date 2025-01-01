// async/await
// async and await make handling promises easier and provide a synchronous-looking syntax.
// * Syntactic sugar over Promises
// * Makes asynchronous code look and behave more like synchronous code
// * Uses try/catch for error handling
// * Allows sequential async operations with clean syntax

function fetchUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const user = {
          id: userId,
          name: "Ram",
          email: "ram@example.com",
        };

        resolve(user);
      } else {
        reject(new Error("Invalid User ID"));
        // callback(new Error('Invalid User ID'), null);
      }
    }, 1000);
  });
}

async function asyncTaskOperation() {
  try {
    const result1 = await fetchUserDataPromise(1);
    console.log(result1);

    const result2 = await fetchUserDataPromise(2);
    console.log(result2);

    const result3 = await fetchUserDataPromise(3);
    console.log(result3);

    // const result4 = await Promise.all([]);

    return true;
  } catch (error) {
    console.log(error);
    throw new Error('error fetching user');
  }
}

// asyncTaskOperation();
asyncTaskOperation()
  .then((result) => {
    console.log('result: ', result);
  })
  .catch((e) => {
    console.log('error: ', e);
  });



// async await promise
async function getData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
  let result = await promise;
  console.log(result);
}
getData(); // Output: Data received (after 1 second)


function test(option1, option2) {
  console.log(option1);
  console.log(option2);
}
test(2);
test(null, 2);