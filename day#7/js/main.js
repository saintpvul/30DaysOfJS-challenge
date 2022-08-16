// DAY 7

/*

Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

*/

//Solution

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}

sumOfNumbers(16);

sumOfNumbers(3);

sumOfNumbers(100);
