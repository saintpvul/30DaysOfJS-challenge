// DAY 6

/*

Write a script which generates a random hexadecimal number.

'#ee33df'

*/

// Solution;

function makehex() {
  var letter = "0123456789ABCDEF";
  var hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += letter[Math.floor(Math.random() * 16)];
  }
  return hex;
}
console.log(makehex());
