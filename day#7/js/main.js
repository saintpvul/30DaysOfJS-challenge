// DAY 7

/*

Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

*/

//Solution

function density(mass, volume) {
  let dens = mass / volume;
  return `Density of substance is ${dens}`;
}
console.log(density(15, 23));
