// DAY 7

/*

Write a functions which checks if all items are unique in the array.

*/

//Solution

function typeCheck(arr) {
  let checkType = arr.every((elem) => typeof elem == typeof arr[0]);
  if (checkType) {
    console.log("Type of all items are the same");
  } else {
    console.log("Not all items has the same type");
  }
}

typeCheck([1, 2, 3]);

typeCheck(["paul", "jesus", "zeus"]);

typeCheck(["paul", 1, null]);
