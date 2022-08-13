// DAY 6

/*


An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack


*/

// Solution

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "Redux",
  "Node",
  "React",
  "Express",
  "MongoDB",
];

let m = webTechs.indexOf("MongoDB");
let e = webTechs.indexOf("Express");
let r = webTechs.indexOf("React");
let n = webTechs.indexOf("Node");
let mernStack = "MERN";

if (
  webTechs.indexOf("MongoDB") !== -1 &&
  webTechs.indexOf("Node") !== -1 &&
  webTechs.indexOf("Express") !== -1 &&
  webTechs.indexOf("React") !== -1
) {
  webTechs.splice(m, 1);
  webTechs.splice(e, 1);
  webTechs.splice(r, 1);
  webTechs.splice(n, 1);
  webTechs.push(mernStack);
}
console.log(webTechs);
