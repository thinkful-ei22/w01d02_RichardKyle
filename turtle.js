'use strict';

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// Version 1:
// Filter
// const filteredMovements = turtleMovements.filter(move => (move[0] >= 0 && move[1] >= 0));
// console.log(filteredMovements);

// Map
// const numSteps = filteredMovements.map(move => move[0] + move[1]);
// console.log(numSteps);

// forEach
// numSteps.forEach(num => console.log(`The turtle took ${num} steps.`));

// Version 2: (refactored)
turtleMovements
  .filter(move => (move[0] >= 0 && move[1] >= 0))
  .map(move => move[0] + move[1])
  .forEach(num => console.log(`The turtle took ${num} steps.`));
  