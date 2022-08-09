// month 4

/*

Write a program which tells the number of months in a month.

 Enter a month: January
  January has 31 months.

  Enter a month: JANUARY
  January has 31 month

  Enter a month: February
  February has 28 months.

  Enter a month: FEbruary
  February has 28 months.

*/

// Solution

let getYear = prompt("Enter a year:");

let getMonth = prompt("Enter a month:");
let removeSpaces = getMonth.trim();
let findmonth = removeSpaces.toLowerCase();
if (
  findmonth === "january" ||
  findmonth === "march" ||
  findmonth === "may" ||
  findmonth === "july" ||
  findmonth === "august" ||
  findmonth === "october" ||
  findmonth === "december"
)
  console.log(
    findmonth.charAt(0).toUpperCase() + findmonth.slice(1) + " has 31 days."
  );
else if (
  findmonth === "september" ||
  findmonth === "april" ||
  findmonth === "june" ||
  findmonth === "november"
)
  console.log(
    findmonth.charAt(0).toUpperCase() + findmonth.slice(1) + " has 30 days."
  );
else if (
  (0 == getYear % 4 && 0 != getYear % 100 && findmonth === "february") ||
  (0 == getYear % 400 && findmonth === "february")
)
  console.log(
    "In leap year " +
      findmonth.charAt(0).toUpperCase() +
      findmonth.slice(1) +
      " has 29 days."
  );
else if (findmonth === "february")
  console.log(
    findmonth.charAt(0).toUpperCase() + findmonth.slice(1) + " has 28 days."
  );
else console.log("Is " + findmonth.toUpperCase() + " a month? Try again");
