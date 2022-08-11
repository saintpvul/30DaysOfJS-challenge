// Day 5

/*

In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

-add 'Meat' in the beginning of your shopping cart if it has not been already added
-add Sugar at the end of you shopping cart if it has not been already added
-remove 'Honey' if you are allergic to honey
-modify Tea to 'Green Tea'

*/

// Solution

import countries from "./countries.js";
console.log(countries);

import webTechs from "./web_techs.js";
console.log(webTechs);
if (!countries.includes("Ethiopia")) console.log(countries.push("Ethiopia"));
else console.log("ETHIOPIA");
