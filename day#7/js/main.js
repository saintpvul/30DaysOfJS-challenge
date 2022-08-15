// DAY 7

/*

Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

*/

//Solution

function checkSeason(month) {
  let monthToLow = month.toLowerCase();
  if (
    monthToLow == "december" ||
    monthToLow == "january" ||
    monthToLow == "february"
  )
    console.log("The season is Winter");
  else if (
    monthToLow == "march" ||
    monthToLow == "april" ||
    monthToLow == "may"
  )
    console.log("The season is Spring");
  else if (
    monthToLow == "june" ||
    monthToLow == "july" ||
    monthToLow == "august"
  )
    console.log("The season is Summer");
  else if (
    monthToLow == "september" ||
    monthToLow == "october" ||
    monthToLow == "november"
  )
    console.log("The season is Autumn");
  else console.log(`${month} is not a Month`);
}

checkSeason("April");
checkSeason("September");
checkSeason("Mai");
