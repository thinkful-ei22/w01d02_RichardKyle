'use strict';

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// TASK: DEFINE YOUR FILTER FUNCTION BELOW:

function filter(arr, fn) {
  const newArray = [];

  // loop through the element of the array
  for (let i = 0; i < arr.length; i++) {
    // if statement to check if fn(arr[i]) is true
    if (fn(arr[i])) {
      // if so, push element in to newArray
      newArray.push(arr[i]);
    }
  }
  
  return newArray;
}

// Bonus credit!
console.log(filter(myNames, (name => name[0] === 'R')));


// Misunderstood bonus credit:
/*
function filter(arr, fn) {
  return arr.map(name => (fn(name)) ? name : null).;
}
*/
