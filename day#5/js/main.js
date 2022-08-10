// Day 5

/*

Remove the middle IT company or companies from the array

*/

// Solution

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let splice = itCompanies.splice(3, 1);
console.log(itCompanies);
