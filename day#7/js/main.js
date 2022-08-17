// DAY 7

/*

Writ a function which generates a randomUserIp.

*/

//Solution

function mac() {
  let mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
  return mac;
}
console.log(mac());
