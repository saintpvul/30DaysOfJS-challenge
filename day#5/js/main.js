// Day 5

/*

In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

-add 'Meat' in the beginning of your shopping cart if it has not been already added
-add Sugar at the end of you shopping cart if it has not been already added
-remove 'Honey' if you are allergic to honey
-modify Tea to 'Green Tea'

*/

// Solution

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const allergic = true;
let indexOf = shoppingCart.indexOf("Tea");
if (indexOf !== -1) shoppingCart[indexOf] = "Green Tea";
if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");
if (allergic === true)
  shoppingCart.splice(
    shoppingCart.findIndex((elem) => elem === "Honey"),
    1
  );
console.log(shoppingCart);
