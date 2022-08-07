// Day 3

/*

Create a human readable time format using the Date time object

*/

// Solutionc

let date = new Date();
let year = date.getFullYear();
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let day = ("0" + (date.getDay() + 1)).slice(-2);
let hour = ("0" + (date.getHours() + 1)).slice(-2);
let minute = ("0" + (date.getMinutes() + 1)).slice(-2);

let i = year + "-" + month + "-" + day + " " + hour + ":" + minute;
console.log(i);

let ii = day + "-" + month + "-" + year + " " + hour + ":" + minute;
console.log(ii);

let iii = day + "/" + month + "/" + year + " " + hour + ":" + minute;
console.log(iii);
