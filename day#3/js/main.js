// Day 3

/*

Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

*/

// Solutionc

let birth = prompt("Enter your year of birth :");
let date = new Date().getFullYear();
let age = date - +birth;
let allow = 18;
if (age >= allow)
  console.log("You are " + age + ". You are old enough to drive.");
else if (age > 5 && age < 12)
  console.log(
    "Hey kid, are you " + age + " years old? Whooh, where is your mommy?"
  );
else if (age >= 0 && age <= 5)
  console.log(
    "Seriously. You are " +
      age +
      "years old? I'm here to calculate that shit, dude"
  );
else if (age < allow)
  console.log(
    "You are " +
      age +
      ". You will be allowed to drive after " +
      (allow - age) +
      " years."
  );
else console.log("Your age is not indentified");
