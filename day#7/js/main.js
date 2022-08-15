// DAY 7

/*

A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

*/

//Solution

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return `A Volue of rectengular prism is ${volume}`;
}
console.log(volumeOfRectPrism(21, 23, 41));
console.log(volumeOfRectPrism(5, 3, 4));
console.log(volumeOfRectPrism(10, 20, 10));
