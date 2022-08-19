// DAY 7

/*

Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

*/

//Solution

function modifyArray(arr) {
  if (arr.length > 4) {
    arr[4] = arr[4].toUpperCase();
    return arr;
  } else return "item not found";
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);

console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
