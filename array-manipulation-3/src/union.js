/* exported union */

function union(first, second) {
  var result = [];

  for (var i = 0; i < first.length; i++) {
    var found = false;

    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      result.push(first[i], second[i]);
    }
  }
  return result;
}
