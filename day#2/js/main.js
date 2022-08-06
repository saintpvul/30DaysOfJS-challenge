// DAY 2

/*

Generate a random number between 0 and 255 inclusively.

*/

// Solution

function getRandomInt(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
getRandomInt(0, 255);
