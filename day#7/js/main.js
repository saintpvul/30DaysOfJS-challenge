// DAY 7

/*

Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)

*/

//Solution

function randNum(num) {
  return Math.floor(Math.random() * num);
}
function rgbColorGenerator() {
  return `rgb(${randNum(255)},${randNum(255)},${randNum(255)})`;
}

console.log(rgbColorGenerator());
