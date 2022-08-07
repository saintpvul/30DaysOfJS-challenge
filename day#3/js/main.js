// Day 3

/*

Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

*/

// Solution

let i = 4 > 3 && 10 < 12; // true
let ii = 4 >= 3 && 10 > 12; // false
let iii = 4 < 3 || 10 < 12; // true
let iv = 4 <= 3 || 10 > 12; //false
let v = !(4 > 3); // false
let vi = !(4 < 3); // true
let vii = !false; // true
let viii = !(4 > 3 && 10 < 12); //false
let ix = !(4 > 3 && 10 > 12); // true
let x = !(4 === "4"); //true
let xi = 4 === "4"; // false
let python = "python",
  dragon = "dragon"; // true

console.log(
  i,
  ii,
  iii,
  iv,
  v,
  vi,
  vii,
  viii,
  ix,
  x,
  xi,
  python.includes("on") && dragon.includes("on")
);
