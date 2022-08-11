// Day 5

/*

The following is an array of 10 students ages:

- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

*/

// Solution

import countries from "./countries.js";
console.log(countries);

import webTechs from "./web_techs.js";
console.log(webTechs);

let sliceTen = countries.slice(0, 10);
console.log(sliceTen);

const midNdx = countries[Math.round((countries.length - 1) / 2)];
console.log(midNdx);

let odd = [];
let even = [];
for (let i = 0; i < countries.length; i++) {
  if ((i + 2) % 2 == 0) {
    odd.push(countries[i]);
  } else {
    even.push(countries[i]);
  }
}
console.log(odd);
console.log(even);
