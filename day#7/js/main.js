// DAY 7

/*

Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
*/

//Solution

function capitalizedArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }

  console.log(newArr);
}

capitalizedArray(["apple", "orange", "lemon"]);

capitalizedArray(["oregon", "washington", "california"]);
