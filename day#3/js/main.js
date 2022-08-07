// Day 3

/*

Compare your first name length and your family name length and you should get this output.

*/

// Solutionc

let yourAge = prompt("Enter your age :");
let myAge = prompt("And my age is :");
if (yourAge === "" || myAge === "") console.log("You should enter numbers");
else if (+yourAge === +myAge + 1)
  console.log("I am " + (+myAge - +yourAge) + " year older than you");
else if (+yourAge + 1 === +myAge)
  console.log("I am " + (+myAge - +yourAge) + " year older than you");
else if (+yourAge > +myAge && +yourAge !== +myAge + 1)
  console.log("You are " + (+yourAge - +myAge) + " years older than me");
else if (+yourAge < +myAge && +yourAge + 1 !== +myAge)
  console.log("I am " + (+myAge - +yourAge) + " years older than you");
else if (+yourAge === +myAge) console.log("We are peers");
else console.log("Can't calculate this numbers");
