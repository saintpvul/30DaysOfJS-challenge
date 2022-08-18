// DAY 7

/*

Write a function arrayOfRgbColors which return any number of RGB colors in an array.

*/

//Solution

function arrayOfRgbColors() {
  let arr = [];
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  arr.push(`rgb(${r},${g},${b})`);
  console.log(arr);
}

arrayOfRgbColors();
