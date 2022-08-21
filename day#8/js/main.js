// DAY 8

/*

Set new properties the dog object: breed, getDogInfo


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

dog.breed = "Pug";
dog.getDogInfo = function () {
  return `Look at this cute ${dog.breed}. This is ${dog.name}. He has ${
    dog.legs
  } legs. His collor is ${dog.color} and he is ${
    dog.age
  }. Did you hear what does ${dog.name} said? ${
    dog.name
  } said : ${dog.getBark()}`;
};
console.log(dog.getDogInfo());
