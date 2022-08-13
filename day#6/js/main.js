// DAY 6

/*


Use the webTechs array to create the following array of arrays:


*/

// Solution

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let arr = [];
let newArr = [];

for (let i = 0; i < webTechs.length; i++) {
  newArr.push(webTechs[i], webTechs[i].length);
  arr.push(newArr.splice(0, 2));
}
console.log(arr);
