// DAY 6

/*

Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

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

for (let i = 0; i < countries.length; i++) {
  let toUp = countries[i].toUpperCase();

  arrIn.push(countries[i]),
    arrIn.push(toUp.slice(0, 3)),
    arrIn.push(countries[i].length);

  for (let j = 0; j < arrIn.length; j++) {
    arrOut.push(arrIn.splice(0, 3));
  }
}
console.log(arrOut);
