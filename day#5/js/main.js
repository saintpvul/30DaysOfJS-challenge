// Day 5

/*

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

*/

// Solution

import countries from "./countries.js";
console.log(countries);

import webTechs from "./web_techs.js";
console.log(webTechs);

let getInd = webTechs.findIndex((elem) => elem === "Sass");
if (webTechs.includes("Sass"))
  console.log(webTechs[getInd] + " is a CSS preprocess");
else webTechs.push("Sass");
console.log(webTechs);
