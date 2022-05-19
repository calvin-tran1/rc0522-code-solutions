/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  for (var i = 0; i < array.length; i++) {
    var index = array[i];
    indexes.push(array.indexOf(index));
  }
  return indexes;
}
