// synchronous runs one after another example
// Synchronous System tasks are completed one after another.
// Asynchronous System tasks are completed independently.
// Asynchronous all the files runs at the same time

//  Synchronous Code Example

console.log(" I");
console.log(" love");
console.log(" Spicy Food");

//  Asynchronous Code Example
// This will be shown after 2 seconds

console.log("I");
setTimeout(() => {
  console.log("love");
}, 5000);

console.log("Spicy Food");
