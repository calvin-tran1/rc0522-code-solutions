/* exported difference */

// find the unique elements from both arrays --completed
// push the unique elements from each array into one --completed

function difference(first, second) {
  var result = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      result.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      result.push(second[i]);
    }
  }
  return result;
}
