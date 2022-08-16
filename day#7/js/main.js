// DAY 7

/*

Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

*/

//Solution

function showDateTime() {
  let date = new Date();
  let getDay = ("0" + date.getDay()).slice(-2);
  let getMonth = ("0" + date.getMonth()).slice(-3);
  let getYear = date.getFullYear();
  let getHour = ("0" + date.getHours()).slice(-2);
  let getMin = ("0" + date.getMinutes()).slice(-2);
  console.log(`${getDay}/${getMonth}/${getYear} ${getHour}:${getMin}`);
}
showDateTime();
