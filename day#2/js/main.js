// DAY 2

/*

Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/

// Solution

const income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let getNum = income.match(/(\d+)/gi);
console.log(getNum);
let a = parseInt(getNum[0]);
let b = parseInt(getNum[1]);
let c = parseInt(getNum[2]);
console.log("His annuale income is " + ((a + c) * 12 + b));
