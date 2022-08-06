// DAY 2

/*

Generate a random number between 0 and 100 inclusively.

*/

// Solution

let random = Math.random();
let toHundret = random * 101;
let floorHundret = Math.floor(toHundret);
console.log("Your random number is " + floorHundret);
