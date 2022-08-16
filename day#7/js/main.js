// DAY 7

/*

Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

*/

//Solution

function evensAndOdds(num) {
  let odd = 0;
  let even = 0;
  for (let i = num; i >= 0; i--) {
    if (i % 2 === 0) {
      odd++;
    } else {
      even++;
    }
  }
  console.log(
    `The number of odds are ${odd}.\nThe number of evens are ${even}`
  );
}

evensAndOdds(100);

evensAndOdds(300);

evensAndOdds(256);
