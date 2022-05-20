/* exported getKeys */

// assign empty array to a variable --completed
// find the property keys within object --completed
// push keys into variable with empty array --completed
// return the variable --completed

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
