// DAY 7

/*

Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

*/

//Solution

function areaOfCircle(r) {
  let area = Math.floor(Math.PI * r * r);
  return `Area of circle equal to ${area}`;
}
console.log(areaOfCircle(15));
console.log(areaOfCircle(5));
console.log(areaOfCircle(10));
