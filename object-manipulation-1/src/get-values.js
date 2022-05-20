/* exported getValues */

// assign empty array to a variable --completed
// use for..in to get key values from within object --completed
// push values to empty array variable --completed
// return variable --completed

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
