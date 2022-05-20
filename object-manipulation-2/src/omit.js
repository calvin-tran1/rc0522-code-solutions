/* exported omit */

// create empty object and assign to a variable --completed
// push the properties that were not selected into the newly created object

function omit(source, keys) {
  var object = {};
  for (var key in source) {
    if (keys.includes(key)) continue;
    object[key] = source[key];
  }
  return object;
}

// check if keys argument matches with the keys in given source argument
// return remaining properties into the empty object
