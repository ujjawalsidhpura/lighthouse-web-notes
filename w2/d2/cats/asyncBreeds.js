const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function (breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) {
      printOutCatBreed(data);
    }
  });
};

const printOutCatBreed = breed => {
  console.log('return value: ', breed);
}

// we try to get the return value
breedDetailsFromFile('Bombay', printOutCatBreed);
console.log('Return Value: ', 'Bombay'); // => will NOT print out details, instead we will see undefined!