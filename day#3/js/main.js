// Day 3

/*

Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

*/

// Solutionc

let birth = prompt("Enter number of years you live :");
let oneMinute = 60;
let oneHour = oneMinute * 60;
let oneDay = oneHour * 24;
let oneYear = oneDay * 365;
let secondOfLive = +birth * oneYear;
if (secondOfLive >= oneYear * 100)
  console.log(
    "You live such a long live. In seconds it would be " +
      secondOfLive +
      " seconds."
  );
else if (secondOfLive >= oneYear * 50 && secondOfLive < oneYear * 100)
  console.log(
    "Your live includes " +
      secondOfLive +
      " seconds. It is somwhere between 50 and 100 years. We won't tell anyone."
  );
else if (secondOfLive >= oneYear * 25 && secondOfLive < oneYear * 50)
  console.log(
    "You live not so long live, i should say. Just " +
      secondOfLive +
      " seconds."
  );
else
  console.log("You are so young. You live only " + secondOfLive + " seconds.");
