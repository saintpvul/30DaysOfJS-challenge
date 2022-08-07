// Day 3

/*

Compare your first name length and your family name length and you should get this output.

*/

// Solutionc

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
if (firstName.length > lastName.length)
  console.log(
    "Your first name " +
      firstName +
      " is longer than your last name " +
      lastName
  );
else
  console.log(
    "Your last name " +
      lastName +
      " is longer than your first name " +
      firstName
  );
