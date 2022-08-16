// DAY 7

/*

Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

*/

//Solution

function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reverseArray([1, 2, 3]);
reverseArray(["Paul", "Raul", "Esaul"]);
