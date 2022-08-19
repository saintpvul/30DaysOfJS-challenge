// DAY 7

/*

Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.



*/

//Solution

function sumOfArrayItems(param) {
  let total = 0;
  if (param.every((elem) => typeof elem == "number")) {
    total = param.reduce((a, b) => a + b, 0);
    return total;
  } else if (
    !param.every((elem) => elem == undefined && typeof elem == "number")
  ) {
    return "Not all items are numbers";
  }
}

console.log(sumOfArrayItems([1, 2, 3]));

console.log(sumOfArrayItems(["Paul", 1, 2]));
