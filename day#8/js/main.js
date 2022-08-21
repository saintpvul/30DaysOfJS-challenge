// DAY 8

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
  getBark: function () {
    return `${this.bark}`;
  },
};

console.log(
  `This is ${dog.name}. He has ${dog.legs} legs. His collor is ${
    dog.color
  } and he is ${dog.age}. Did you hear what does ${dog.name} said? ${
    dog.name
  } said : ${dog.getBark()}`
);
