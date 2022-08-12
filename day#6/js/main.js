// DAY 6

/*

Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


*/

// Solution;

let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = i + sumEven;
  } else sumOdd = i + sumOdd;
}

console.log(
  "The sum of all evens from 0 to 100 is " +
    sumEven +
    ".  And the sum of all odds from 0 to 100 is " +
    sumOdd
);
