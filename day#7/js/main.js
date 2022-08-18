// DAY 7

/*

Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

*/

//Solution

function arrayOfHexaColors() {
  let arr = [];
  let hexa =
    "#" +
    ((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
  arr.push(hexa);
  console.log(arr);
}

arrayOfHexaColors();
