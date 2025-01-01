// Promise:
//An object representing the eventual completion or failure of an asynchronous operation.
// * Introduced to solve callback limitations
// * Provides cleaner chaining of asynchronous operations
// * Has three states: pending, fulfilled, rejected
// * Allows .then() and .catch() for handling results and errors

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

// usage
fetchUserDataPromise(123)
  .then((result) => {
    // resolve
    console.log("result: ", result);
    // fetchUserDataPromise(12)
  })
  .catch((err) => {
    // reject
    console.log("Catch error: ", err);
  })
  .finally(() => {
    // optional
    console.log("task finished");
  });

// Promise.all()

Promise.all([
  fetchUserDataPromise(1),
  fetchUserDataPromise(2),
  fetchUserDataPromise(3),
])
  .then((results) => {
    console.log("results: ", results);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

fetchUserDataPromise(1)
  .then((result) => {
    fetchUserDataPromise(2)
      .then((result1) => {
        fetchUserDataPromise(3)
          .then((result2) => {})
          .catch((e2) => {});
      })
      .catch((e1) => {});
  })
  .catch((e) => {});
