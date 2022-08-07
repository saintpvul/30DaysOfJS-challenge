// Day 3

/*

Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))


*/

// Solution
let a = prompt("Enter radius: ");
let PI = 3.14;
let area = PI * +a * +a;
let circumference = 2 * PI * +a;

console.log(
  "The area of circle is " +
    area +
    ". And circumference of circle is " +
    circumference
);
