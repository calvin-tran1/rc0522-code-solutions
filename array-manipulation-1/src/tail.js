/* exported tail */

// write function to retrieve everything but the first value within array --completed
// assign empty array to a variable --completed
// function has to filter out first value of array --completed
// push every value other than first array to the variable with the empty array --completed
// return the variable --completed

function tail(array) {
  var x = [];
  for (var i = 1; i < array.length; i++) {
    x.push(array[i]);
  }
  return x;
}
