// DAY 7

/*

Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

*/

//Solution

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}

console.log(factorial(1));

console.log(factorial(4));

console.log(factorial(15));
