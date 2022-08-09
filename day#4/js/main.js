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
else if (findmonth === "february")
  console.log(
    findmonth.charAt(0).toUpperCase() + findmonth.slice(1) + " has 28 days."
  );
else console.log("Is " + findmonth.toUpperCase() + " a month? Try again");
