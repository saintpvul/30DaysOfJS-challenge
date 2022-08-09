// Day 5

/*

Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

*/

// Solution

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
function check(company) {
  if (itCompanies.includes(company)) console.log(company);
  else console.log(company + " is not found");
}

check("IBM");
check("Dell");
check("SpaseX");
check("Apple");
check("Facebook");
