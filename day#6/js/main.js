// DAY 6

/*

Sort the webTechs array and mernStack array

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

const mernStack = ["MongoDB", "Express", "React", "Node"];

const sortedTechs = [...webTechs].sort();
console.log(`For sorted Techs ${sortedTechs}`);

const sortedMern = [...mernStack].sort();
console.log(`For sorted MERN ${sortedMern}`);

const sortAllTechs = sortedTechs.concat(sortedMern).sort();
console.log(`For all sorted techs ${sortAllTechs}`);
