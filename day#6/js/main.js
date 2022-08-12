// DAY 6

/*

Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

 [2550, 2500]

*/

// Solution;
let arr = [];
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = i + sumEven;
  } else sumOdd = i + sumOdd;
}
arr.push(sumEven);
arr.push(sumOdd);
console.log(arr);
