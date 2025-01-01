/*********  Problem of Memory leaks *********
 It occur when objects are not properly removed from memory, 
 leading to high memory consumption over time.*/

// Example of Memory Leak:
let largeObject = { data: new Array(1000000).fill("data") };

function memoryLeak() {
  let element = document.getElementById("bigElement");
  element.addEventListener("click", function () {
    console.log(largeObject.data[0]); // Retains reference to `largeObject`
  });
}
// Cause: Event listeners hold references to objects, 
// preventing garbage collection.



/*********  Solution: Remove Unnecessary References   **********
Use removeEventListener to clean up event handlers.*/

function optimizeMemory() {
  let element = document.getElementById("bigElement");
  const handler = function () {
    console.log("Event triggered");
  };

  element.addEventListener("click", handler);

  // Remove event listener
  element.removeEventListener("click", handler);
}

// Benefits: Frees up memory by breaking unnecessary references.

