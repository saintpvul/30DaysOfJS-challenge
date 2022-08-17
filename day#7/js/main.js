// DAY 7

/*

Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'

*/

//Solution

function randomHexaNumberGenerator() {
  console.log(
    "#" +
      ((Math.random() * 0xffffff) << 0)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
  );
}
randomHexaNumberGenerator();
