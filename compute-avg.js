'use strict';
const average = function (numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });

  let length = numbers.length;
  let averageNum = sum / length;
  return averageNum;
};

let numArray = [5, 10, 20, 25, 5];
let output = average(numArray);
console.log(output); // 13