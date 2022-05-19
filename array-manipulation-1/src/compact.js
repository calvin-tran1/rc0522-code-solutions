/* exported compact */

function compact(array) {
  var x = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      x.push(array[i]);
    }
  }
  return x;
}
