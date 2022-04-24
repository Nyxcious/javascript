'use strict';

//!Problem

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate temperature amplitude
//Keep in mind that sometimes their might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Steps

//1) Understand the problem
//What is the temperature amplitude? Answer : difference between highest and lowest temp
//How to compute highest and lowest temperatures
//What is a sensor error ? And what to do when it is encountered?

//2) Breaking up into sub-problems
//How to ignore the errors
//Find max value in temp array
//Find the min value in temp array
//Subtract min from max and return it = amplitude

//Implementation :

const calcTempAmplitude = function (temps) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] === 'error') {
      continue;
    }
    if (temps[i] < min) {
      min = temps[i];
    }
    if (temps[i] > max) {
      max = temps[i];
    }
  }

  const amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitude(temperature));

// Problem 2 : Function should now receive two arrays on temperature :

//1) Understand the problem
// With 2 arrays, should we implement same functionality twice : Answer : No, Just merge two arrays into single one

//)2) Breaking into sub parts
//How to merge two arrays into one ?

//Now let's implement this : 

// We can use array.concat method into , More on this on Mozilla Developer Network(MDN)
//array3 = array1.concat(array2);

// But lets try to merge on our own :

const temperature2 = [-9, -4, -9, 'error', 40, 29, 15, 12, 7, 2, 'error', 3];

const temperature3 = [24];

for (let i = 0; i < temperature.length; i++) {
  temperature3[i] = temperature[i];
}

let counter = 0;
for (let i = temperature.length; i < 24; i++) {
  temperature3[i] = temperature2[counter];
  counter++;
}

console.log(calcTempAmplitude(temperature3));
