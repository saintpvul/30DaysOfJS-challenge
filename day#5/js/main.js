// Day 5

/*

Concatenate the following two variables and store it in a fullStack variable.

*/

// Solution

import countries from "./countries.js";
console.log(countries);

import webTechs from "./web_techs.js";
console.log(webTechs);

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
