// DAY 7

/*

Declare a function name swapValues. This function swaps value of x to y.

*/

//Solution

function swapValues(x, y) {
  [x, y] = [y, x];
  console.log(x, y);
}
function swapValue(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(x, y);
}

swapValues(3, 5);

swapValue(5, 7);
