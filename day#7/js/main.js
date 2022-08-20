// DAY 7

/*

Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

*/

//Solution

function reverseCountries(arr) {
  let copyArr = [...arr];
  console.log(`Copy of countries array is ${copyArr}`);
  for (let i = copyArr.length - 1; i >= 0; i--) {
    console.log(copyArr[i]);
  }
}

reverseCountries([
  "Finland",
  "Kazakhstan",
  "Algeria",
  "USA",
  "UAE",
  "Korea",
  "Mali",
]);
