// Day 3

/*

Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

*/

// Solution

let firstName = "Paul",
  lastName = "Shvets",
  country = "Kazakhstan",
  city = "Almaty",
  age = 27,
  isMarried = true,
  now = new Date(),
  year = now.getFullYear();

console.log(
  "Name " + firstName,
  typeof firstName,
  ". Last name " + lastName,
  typeof lastName,
  ". Country " + country,
  typeof country,
  ". City " + city,
  typeof city,
  ". Age " + age,
  typeof age,
  ". Married " + isMarried,
  typeof isMarried,
  ". Year " + year,
  typeof year
);
