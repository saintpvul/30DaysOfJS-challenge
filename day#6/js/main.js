// DAY 6

/*

Write a script which generates a random rgb color number.

rgb(240,180,80)

*/

// Solution;
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);
