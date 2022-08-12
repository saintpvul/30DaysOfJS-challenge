// DAY 6

/*

Iterate 10 to 0 using for loop, do the same using while and do while loop


*/

// Solution

for (let i = 10; i >= 0; i--) {
  console.log("For loop I", i);
}

let i1 = 10;
while (i1 >= 0) {
  console.log("While I ", i1);
  i1--;
}

let i2 = 10;
do {
  console.log("Do ... while I", i2);
  i2--;
} while (i2 >= 0);
