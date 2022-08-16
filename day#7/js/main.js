// DAY 7

/*

Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

*/

//Solution
let arr = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function removeItem(ndx) {
  arr.splice(ndx, 1);
  console.log(arr);
}

removeItem(0);
