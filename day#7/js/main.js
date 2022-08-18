// DAY 7

/*

Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

*/

//Solution

function convertHexaToRgb() {
  let hex =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        hex,
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

console.log(convertHexaToRgb());
