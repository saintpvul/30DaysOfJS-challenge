// DAY 7

/*

Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

*/

//Solution

function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
}

sumOfOdds(16);

sumOfOdds(3);

sumOfOdds(100);
