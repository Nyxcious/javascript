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

const calcTempAmplitude = function (temps) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] === 'error') {
      continue;
    }
    if (temperature[i] < min) {
      min = temperature[i];
    }
    if (temperature[i] > max) {
      max = temperature[i];
    }
  }

  const amplitude = min - max;
  return amplitude;
};

console.log(calcTempAmplitude(temperature));
