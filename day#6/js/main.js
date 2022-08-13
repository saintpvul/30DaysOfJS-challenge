// DAY 6

/*


Using the above countries array, find the country containing the biggest number of characters.

Ethiopia


*/

// Solution
let arrOut = [];
let arrIn = [];
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

var length = 0;
var longest;

for (var i = 0; i < countries.length; i++) {
  if (countries[i].length > length) {
    var length = countries[i].length;
    longest = countries[i];
  }
}

console.log(longest);
