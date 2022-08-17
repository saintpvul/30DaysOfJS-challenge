// DAY 7

/*

Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'


*/

//Solution

function userIdGenerator() {
  let text = "";
  let char = "01234567890abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let length = prompt("Enter number of characters you needed: ");
  let idNum = prompt("Enter number of IDs you needed: ");

  for (let i = 0; i < +length; i++)
    text += char.charAt(Math.floor(Math.random() * char.length));

  return text;
}

console.log(userIdGenerator());
