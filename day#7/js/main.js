// DAY 7

/*

Call your function isEmpty, it takes a parameter and it checks if it is empty or not

*/

//Solution

function isEmpty(param) {
  if (typeof param !== "undefined" && param) {
    console.log(`Param is not empty`);
  } else {
    console.log(`Param is empty`);
  }
}

isEmpty("");

isEmpty(null);

isEmpty("1");

isEmpty(true);
