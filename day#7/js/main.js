// DAY 7

/*

Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

*/

//Solution

function addItem(...i) {
  let arr = [];
  arr.push(...i);
  console.log(arr);
}

addItem("apple", "orange", "pineapple");
