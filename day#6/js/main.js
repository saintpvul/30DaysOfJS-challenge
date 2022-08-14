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

function find(keyword) {
  if (keyword == "land") {
    console.log([countries.filter((country) => country.endsWith("land"))]);
  }
}
let newArr = [];
let findItem = newArr.push(find("land"));
