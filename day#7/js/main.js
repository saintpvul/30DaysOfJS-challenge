// DAY 7

/*

An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

*/

//Solution

function areaOfRectangle(length, width) {
  let area = length * width;
  return `The area of rectangle is ${area}`;
}
console.log(areaOfRectangle(20, 10));
