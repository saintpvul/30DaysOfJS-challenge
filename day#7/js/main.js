// DAY 7

/*

Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

*/

//Solution

function circumOfCircle(r) {
  let circumference = Math.floor(2 * (Math.PI * r));
  return `Circumference of circle equal to ${circumference}`;
}
console.log(circumOfCircle(5));
console.log(circumOfCircle(81));
console.log(circumOfCircle(10));
