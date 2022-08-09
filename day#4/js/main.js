// Day 4

/*

Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

*/

// Solution
let getDay = prompt("What is the day today?");
let removeSpaces = getDay.trim();
let findDay = removeSpaces.toLowerCase();
if (findDay === "saturday" || findDay === "sunday")
  console.log(
    findDay.charAt(0).toUpperCase() + findDay.slice(1) + " is a weekend"
  );
else if (
  findDay === "monday" ||
  findDay === "tuesday" ||
  findDay === "wednesday" ||
  findDay === "thursday" ||
  findDay === "friday"
)
  console.log(
    findDay.charAt(0).toUpperCase() + findDay.slice(1) + " is a working day"
  );
else console.log("Is " + findDay + " a day? Try again");
