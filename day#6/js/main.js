// DAY 6

/*

Write a loop that makes the following pattern using console.log():

  #
  ##
  ###
  ####
  #####
  ######
  #######


*/

// Solution;

for (let i = 1; i < 8; i = i + 1) {
  let str = "";
  for (let j = 0; j < i; j = j + 1) {
    str += "#";
  }
  console.log(str);
}
