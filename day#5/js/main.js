// Day 5

/*

Concatenate the following two variables and store it in a fullStack variable.

*/

// Solution

import countries from "./countries.js";
// console.log(countries);

import webTechs from "./web_techs.js";
// console.log(webTechs);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
