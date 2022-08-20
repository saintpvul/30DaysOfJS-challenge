// DAY 7

/*

Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

*/

//Solution

function randomSeven() {
  var arr = [];
  while (arr.length < 7) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
console.log(randomSeven());
