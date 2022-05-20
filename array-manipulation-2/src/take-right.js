/* exported takeRight */

// use negative count to slice from the right --completed

function takeRight(array, count) {
  return array.slice(-count);
}

// take elements within given array starting from the right
// using a negative argument allows us to start in reverse order(from right)
// return new value
