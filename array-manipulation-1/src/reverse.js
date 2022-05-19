/* exported reverse */

function reverse(array) {
  var x = [];
  for (var i = array.length - 1; i >= 0; i--) {
    x.push(array[i]);
  }
  return x;
}
