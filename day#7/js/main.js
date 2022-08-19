// DAY 7

/*

Write a function called isPrime, which checks if a number is prime number.

*/

//Solution

function isPrime(num) {
  if (num === 1) return `not prime`;
  else if (num === 2) return `prime`;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return "not prime";
      }
    }
    return "prime";
  }
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(11));
