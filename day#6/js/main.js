// DAY 6

/*

Extract all the countries contain the word 'land' from the countries array and print it as array

*/

// Solution

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

console.log([countries.filter((country) => country.endsWith("land"))]);
