// DAY 7

/*

Call your function sum, it takes any number of arguments and it returns the sum.

*/

//Solution

function sum(...arg) {
  let s = arg.reduce((a, b) => a + b, 0);

  return s;
}

console.log(sum(1, 2, 3, 4, 5));

console.log(sum(22, 11, 7));
