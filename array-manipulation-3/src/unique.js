/* exported unique */

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  }
  return result;
}
