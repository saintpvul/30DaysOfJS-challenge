// Day 4

/*

Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.

*/

// Solution

let yourAge = prompt("Enter your age: ");
let myAge = prompt("My age is: ");
if (+yourAge > myAge)
  console.log("You are " + (+yourAge - +myAge) + " years older than me.");
else if (+yourAge == +myAge) console.log("We are peers.");
else console.log("I am " + (+myAge - +yourAge) + " years older than you.");
