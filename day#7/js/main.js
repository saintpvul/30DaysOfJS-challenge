// DAY 7

/*

Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.



*/

//Solution

function average(param) {
  let total = 0;
  if (param.every((elem) => typeof elem === "number")) {
    total = param.reduce((a, b) => a + b, 0);
    return total / param.length;
  } else if (
    !param.every(
      (elem) => typeof elem !== undefined && typeof elem !== "number"
    )
  ) {
    return `not all items are numbers`;
  }
}

console.log(average([1, 2, 3]));

console.log(average([1, null, 3]));

console.log(average([1, "paul", 3]));

console.log(average([1, 10, 4]));
