'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter === 1 ? 'time' : 'times'} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hurricaneWarning = hazardWarningCreator('It is getting windy!');
const earthquakeWarning = hazardWarningCreator('Ground shaking!');

rocksWarning('Main St');
hurricaneWarning('Hawaii');
earthquakeWarning('Olympic Blvd');
earthquakeWarning('Pacific Ave');
earthquakeWarning('Highland');

