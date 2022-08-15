// DAY 7

/*

Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

*/

//Solution

function weight(mass, gravity) {
  let weight = mass * gravity;
  return `Weight is ${weight} N`;
}
console.log(weight(27, 15));
