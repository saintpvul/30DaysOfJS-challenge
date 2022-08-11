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
