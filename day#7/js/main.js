// DAY 7

/*

Write a function which takes any number of arguments and return the sum of the arguments

*/

//Solution

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

console.log(sum(1, 2, 3));

console.log(sum(10, 20, 30));

console.log(sum(22, 11, 33));
