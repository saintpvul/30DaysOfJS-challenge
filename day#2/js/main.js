// DAY 2

/*

Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

*/

// Solution

let str =
  "You cannot end a sentence with because because because is a conjunction";
let strSubsOne = str.substring(0, 39);
let strSubsTwo = str.substring(55, 71);
console.log(strSubsOne.concat(strSubsTwo));
