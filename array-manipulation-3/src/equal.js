/* exported equal */

// check if every element within first array matches every element within second array --completed
// if matches return true --completed
// if doesn't exactly match return false --completed

function equal(first, second) {
  for (var i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
