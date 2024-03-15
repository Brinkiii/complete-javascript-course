// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -10, -6, -1, "error", 9, 13, 28, 15, 14, 9, 5];

// How to ignore errors?
// Find max value in temparray
// find min value in temp Array
// subtract min from max and return it

// const calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 1; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures, temperatures2));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: 10,
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Coding Challenge #1

/* given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

example: [17, 21, 23] will print "... 17°c in 1 days ... 21°c in 2 days ... 23°c in 3 days ..."

create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with another array.

use the problem-solving framework: Understand the problem and break it up into sub-problems!

test data: [17, 21, 23] 
test data: [12, 5, -5, 0, 4]
*/

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let text = ``;
  for (let i = 0; i < arr.length; i++) {
    text += `...${arr[i]}°C in ${i + 1} days `;
  }
  console.log(text);
};

printForecast(arr2);
