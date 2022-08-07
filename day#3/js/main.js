// Day 3

/*

Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

*/

// Solutionc

let date = new Date();
let year = ("0" + (date.getFullYear() + 1)).slice(-3);
let month = ("0" + (date.getMonth() + 1)).slice(-2);
let day = ("0" + (date.getDay() + 1)).slice(-2);
let hour = ("0" + (date.getHours() + 1)).slice(-2);
let minute = ("0" + (date.getMinutes() + 1)).slice(-3);

let i = year + "-" + month + "-" + day + " " + hour + ":" + minute;
console.log(i);
