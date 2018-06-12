'use strict';

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';


// Version 1 - Verbose:
const decode = (str) => {
  // convert the string to an array of words
  const words = str.split(' ');

  const reducer = (accum, word) => {
    // if word is 3 chars long, add a space to accum
    if (word.length === 3) {
      return accum + ' ';
    }
    // else capitalize Last char & add to accum
    else {
      return accum + word[word.length - 1].toUpperCase();
    }
  };
  
  // invoke the reduce method passing in our reducer function
  let decodedString = words.reduce(reducer, '');

  // return the decoded string
  return decodedString;
};


// Version 2 - method chaining:
const decode2 = (str) => {
  return str
    .split(' ')
    .reduce((accum, word) => {
      if (word.length === 3) {
        return accum + ' ';
      }
      return accum + word[word.length - 1].toUpperCase();
    }, '');
};

// console.log the results
console.log(decode(input));
console.log(decode2(input));