// Day 4

/*

Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.

*/

// Solution

function even(a) {
  if (a % 2 === 0) console.log(a + " is an even number");
  else console.log(a + " is an odd number");
}
even(12);
even(11);
even(123 * 121);
even(123 + 121);
