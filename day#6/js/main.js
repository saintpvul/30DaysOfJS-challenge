// DAY 6

/*


Print all the elements of array as shown below.

 HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

*/

// Solution

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let items = fullStack.toString().split(",");

for (let i = 0; i < items.length; i++) console.log(items[i]);
