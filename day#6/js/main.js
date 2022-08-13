// DAY 6

/*


Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']


*/

// Solution
let newArr = [];
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

for (var i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    newArr.push(countries[i]);
  }
}

console.log(newArr);
