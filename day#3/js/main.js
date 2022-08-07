// Day 3

/*

Use the Date object to do the following activities

*/

// Solution
let date = new Date();
let i = date.getFullYear();
let ii = date.getMonth();
let iii = date.getDate();
let iv = date.getDay();
let v = date.getHours();
let vi = date.getMinutes();
let vii = date.getTime();

console.log(
  "Year " + i,
  "Month " + ii,
  "Date " + iii,
  "Day " + iv,
  "Hours " + v,
  "Minutes " + vi,
  "Time from january 1970 " + vii
);
