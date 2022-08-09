// Day 4

/*

Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.

*/

// Solution

let age = prompt("Enter your age: ");
let ok = 18;
if (+age >= 18)
  console.log("You are " + +age + ". You are old enough to drive.");
else console.log("You are left with " + (ok - +age) + " to drive.");
