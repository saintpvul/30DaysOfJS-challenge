// DAY 6

/*

Develop a small script which generate array of 5 random numbers

*/

// Solution;

var arr = [];
while (arr.length < 5) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
