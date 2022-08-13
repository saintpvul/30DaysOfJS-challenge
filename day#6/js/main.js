// DAY 6

/*

Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

*/

// Solution

let upperArr = [];
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
  upperArr.push(countries[i].toUpperCase());
}
console.log(`Countries array: ${countries}`);
console.log(`Uppercase countries array ${upperArr}`);
