// DAY 7

/*

Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.



*/

//Solution

function sumOfArrayItems(param) {
  if (param.every((element) => typeof element === "number")) {
    let sum = param.reduce((a, b) => a + b, 0);
    return sum;
  } else {
    ("Not all items of array is numbers");
  }
}

console.log(sumOfArrayItems([1, 2, 3, 1, 2, 3]));

console.log(sumOfArrayItems([1, "Paul"]));
