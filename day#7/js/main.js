// DAY 7

/*

Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

	console.log(findMax(0, 10, 5))
		10

	console.log(findMax(0, -10, -2))
		0

*/

//Solution

function findMax(...args) {
  let max = Math.max(...args);

  return max;
}

console.log(findMax(13, 141, 84, 123, 41));

console.log(findMax(3, 2, 6));

console.log(findMax(65, 55, 60));
