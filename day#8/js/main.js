// DAY 9

/*

Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
!START


*/

// Solution
const dog = {
  name: "Otto",
  legs: 4,
  color: "black",
  age: 5,
  bark: "woof woof",
};
const bark = Object.keys(dog.bark);
console.log(bark);
