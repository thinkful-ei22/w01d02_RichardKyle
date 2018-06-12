'use strict';

const max = function(numbers) {
  let i = 0;
  let maxNum = numbers[0];
  while (i<numbers.length) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
};

const min = function(numbers) {
  let i = 0;
  let minNum = numbers[0];
  while (i<numbers.length) {
    if (minNum > numbers[i]) {
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
};

console.log(max([23,-12,14,-3,15,100,-1000]));
console.log(min([23,-12,14,-3,15,100,-1000]));