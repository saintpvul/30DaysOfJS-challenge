// DAY 7

/*

A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

*/

//Solution

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return `Perimeter of rectangle is ${perimeter}`;
}
console.log(perimeterOfRectangle(20, 10));

console.log(perimeterOfRectangle(5, 10));

console.log(perimeterOfRectangle(20, 45));
