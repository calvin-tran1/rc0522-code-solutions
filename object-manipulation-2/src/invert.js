/* exported invert */

// create empty object for inverted objects to reside --completed
// iterate over every key within source --completed
// switch the keys and values within source and push result into empty object --completed
// return the previously created object now filled with inversed keys/values --completed

function invert(source) {
  var invertedObj = {};
  for (var key in source) {
    invertedObj[source[key]] = key;
  }
  return invertedObj;
}
