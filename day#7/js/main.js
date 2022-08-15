// DAY 7

/*

Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

*/

//Solution

function convertCelsiusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return `o Celcium ${oC} in o Fahrenheit is ${oF}`;
}
console.log(convertCelsiusToFahrenheit(37));

console.log(convertCelsiusToFahrenheit(0));

console.log(convertCelsiusToFahrenheit(18));
