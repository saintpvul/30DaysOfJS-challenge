// DAY 7

/*

Writ a function which generates a randomUserIp.

*/

//Solution

function randomUserIp() {
  let ip =
    Math.floor(Math.random() * 255) +
    1 +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  return ip;
}

console.log(randomUserIp());
