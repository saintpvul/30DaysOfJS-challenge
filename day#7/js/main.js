// DAY 7

/*

Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

*/

//Solution

function shuffleArray(arr) {
  let index = arr.length,
    randomIndex;

  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }
  return arr;
}

let array = [1, 2, 3, 4, 5, 6];

let array1 = ["Paul", "Otto", "Rodrigo", "Enrique"];

console.log(shuffleArray(array));

console.log(shuffleArray(array1));
