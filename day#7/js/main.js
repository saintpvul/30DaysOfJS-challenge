// DAY 7

/*

Write a functions which checks if all items are unique in the array.

*/

//Solution

function hasDuplicates(array) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (value in valuesSoFar) {
      return `not all items are unique`;
    }
    valuesSoFar[value] = true;
  }
  return `all items are unique`;
}

console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7]));
console.log(hasDuplicates([1, 2, 1, 2, 1]));
