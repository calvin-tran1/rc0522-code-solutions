/* exported initial */

// write function to retrieve all values BUT the last within an array --completed
// assign empty array to a variable --completed
// code has to filter out last value of array --completed
// push all values of the argument, except the last into the variable with the empty array --completed
// return the variable --completed

function initial(array) {
  var x = [];
  for (var i = 0; i < array.length - 1; i++) {
    x.push(array[i]);
  }
  return x;
}
