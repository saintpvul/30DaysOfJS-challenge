// DAY 7

/*

Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE

*/

//Solution

function userIdGenerator() {
  let text = "";
  let char = "01234567890abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 7; i++)
    text += char.charAt(Math.floor(Math.random() * char.length));

  return text;
}

console.log(userIdGenerator());
