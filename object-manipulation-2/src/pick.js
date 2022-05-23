/* exported pick */

// setup an empty object --completed
// pick the desired source properties and push them to the empty object --completed
// filter out undefined values --completed
// return the newly filled object with desired properties --completed

function pick(source, keys) {
  var object = {};
  for (var key of keys) {
    var value = source[key];
    if (value !== undefined) {
      object[key] = value;
    }
  }
  return object;
}
