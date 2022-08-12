// DAY 6

/*

Use for loop to iterate from 0 to 100 and print the sum of all numbers.


*/

// Solution;
//JavaScript program to print prime numbers from 1 to 100 using for loop

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = i + sum;
}

console.log("The sum of all numbers from 0 to 100 is " + sum);
