// DAY 7

/*

Write a function generateColors which can generate any number of hexa or rgb colors.

*/

//Solution

function generateColors(val, a) {
  let res = [];

  if (val == "hexa") {
    for (let i = 0; i < a; i++) {
      let hex =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padEnd(6, "0");
      res.push(hex);
      console.log(res[i]);
    }
  } else if (val == "rgb") {
    for (let j = 0; j < a; j++) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);

      let rgb = `rgb (${r}, ${g}, ${b})`;
      res.push(rgb);
      console.log(res[j]);
    }
  }
}

generateColors("hexa", 4);

generateColors("rgb", 2);
