// DAY 2

/*

Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

*/

// Solution

let almostTen = 9.8;
if (parseFloat(almostTen) === 10) console.log(true);
else console.log(almostTen + " is " + Math.ceil(almostTen) + " now.");
