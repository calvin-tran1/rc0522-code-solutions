/* exported flatten */

// flatten all elements from within all arrays into one --completed

function flatten(array) {
  var flattenedArray = [].concat.apply([], array);
  return flattenedArray;
}
