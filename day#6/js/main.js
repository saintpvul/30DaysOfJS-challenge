// DAY 6

/*

Develop a small script which generate any number of characters random id:

	fe3jo1gl124g

  xkqci4utda1lmbelpkm03rba

*/

// Solution;

function makeid() {
  var text = "";

  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  var getRand = Math.floor(Math.random() * 30);

  for (var i = 0; i < getRand; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
