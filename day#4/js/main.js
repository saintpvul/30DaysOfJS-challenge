// Day 4

/*

Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

*/

// Solution
let getMonth = prompt("Enter current month: ");
let removeSpaces = getMonth.trim();
let findMonth = removeSpaces.toLowerCase();
if (
  findMonth === "september" ||
  findMonth === "october" ||
  findMonth === "november"
)
  console.log("This is Autumn");
else if (
  findMonth === "december" ||
  findMonth === "january" ||
  findMonth === "february"
)
  console.log("This is Winter");
else if (findMonth === "march" || findMonth === "april" || findMonth === "may")
  console.log("This is Spring");
else if (findMonth === "june" || findMonth === "july" || findMonth === "august")
  console.log("This is Summer");
else console.log("Is this a month? Try again");
