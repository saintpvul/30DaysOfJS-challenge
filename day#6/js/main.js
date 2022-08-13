// DAY 6

/*

Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

*/

// Solution

let arrLength = [];
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

for (let i = 0; i < countries.length; i++) {
  arrLength.push(countries[i].length);
}
console.log(`Countries array: ${countries}`);
console.log(`Countries length ${arrLength}`);
