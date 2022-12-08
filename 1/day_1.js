const { readFileSync } = require('fs');

const input = readFileSync('/Users/bene/Documents/Projects/AdventOfCode/1/input.txt', 'utf-8');

var inputArr = input.split(/\r?\n/);

// PART 1

var maxCalories = 0;
var partialCalories = 0;

inputArr.forEach((elem) => {
  if (elem === '') {
    maxCalories = partialCalories > maxCalories ? partialCalories : maxCalories;
    partialCalories = 0;
    return;
  };
  partialCalories += parseInt(elem);
})

console.log('Elf carrying the most calories: ', maxCalories);

// PART 2

function sumArray(array) {
  let sum = 0;

  for (const item of array) {
    sum += item;
  }

  return sum;
}

const caloriesArray = 
  inputArr.join('+')
    .split('++')
    .map(elem => elem.split('+'))
    .map(elem => elem.map(e => parseInt(e)))
    .map(elem => sumArray(elem))
    .sort((a, b) => b - a)

console.log(
  'The sum of the three Elfs carrying the most calories: ',
  caloriesArray[0] + caloriesArray[1] + caloriesArray[2]
);
