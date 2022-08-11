// Day 5

/*

The following is an array of 10 students ages:

- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

*/

// Solution

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sort = ages.sort();
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(sort);
console.log(min);
console.log(max);

let getMid = Math.floor(sort.length / 2);
let median = (sort[getMid] + sort[getMid] - 1) / 2;
console.log(median);

let average = sort.reduce((a, b) => a + b, 0) / sort.length;
console.log(average);

let range = max - min;
console.log(range);

let minAve = Math.abs(min - average);
let maxAve = Math.abs(max - average);
if (minAve > maxAve)
  console.log("Minimum average is larger than maximum average");
else if (minAve < maxAve)
  console.log("Minimum average is less than maximum average");
else if (minAve === maxAve) console.log("They are equal");
else console.log("Something went wrong");
