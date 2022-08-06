// DAY 2

/*

Generate a random number between 50 and 100 inclusively.

*/

// Solution

function getRandomInt(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
getRandomInt(50, 100);
