// DAY 6

/*

Extract all the countries containing only four characters from the countries array and print it as array

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

let newArr = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length <= 4) {
    newArr.push(countries[i]);
  } else console.log("There is no countries with only four characters");
}
console.log(newArr);
