// DAY 6

/*


Find the longest word in the webTechs array


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

let lenght = 0;
let longest;

for (var i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > lenght) {
    lenght = webTechs[i].length;
    longest = webTechs[i];
  }
}

console.log(longest);
