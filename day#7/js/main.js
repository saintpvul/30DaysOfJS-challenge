// DAY 7

/*

Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

*/

//Solution

function sumOfEven(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

sumOfEven(16);

sumOfEven(3);

sumOfEven(100);
