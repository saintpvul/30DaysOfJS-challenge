// DAY 7

/*

JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

*/

//Solution

function isValidVariable(v) {
  let regex = /^[a-zA-Z_$][a-zA-Zd_$]*$/;
  if (v == "" || v == "null") return `var name can't be empty`;
  else {
    if (v.match(regex)) return `${v} is valid var name`;
    else return `${v} is invalid var name`;
  }
}

console.log(isValidVariable(""));

console.log(isValidVariable("newVar"));

console.log(isValidVariable("NEWVAR!"));
