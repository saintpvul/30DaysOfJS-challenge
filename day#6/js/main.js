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

var count = 0;
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > count) {
    var count = countries[i].length;
    highest = countries[i];
  }
}
console.log(`The ${highest} country includes ${count} characters`);
