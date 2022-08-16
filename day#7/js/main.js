// DAY 7

/*

Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

*/

//Solution

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3]);

printArray(["Yetayah", "Miguel", "Paul"]);

printArray([true, 1, null]);
