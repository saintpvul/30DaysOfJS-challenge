// DAY 7

/*

Write a function generateColors which can generate any number of hexa or rgb colors.

*/

//Solution

function convertRgbToHexa(r, g, b) {
  // random rgb
  // let r = Math.floor(Math.random() * 255);
  // let g = Math.floor(Math.random() * 255);
  // let b = Math.floor(Math.random() * 255);

  // component
  function component(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + component(r) + component(g) + component(b);
}

console.log(convertRgbToHexa(134, 31, 121));
console.log(convertRgbToHexa(34, 31, 11));
console.log(convertRgbToHexa(134, 200, 221));
