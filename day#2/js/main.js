// DAY 2

/*

Check if 'on' is found in both python and jargon

*/

// Solution

let python = "python",
  jargon = "jargon";
if (python.includes("on") && jargon.includes("on")) {
  console.log(python + " and " + jargon + ' includes "on".');
} else {
  console.log('"on" is not include.');
}
