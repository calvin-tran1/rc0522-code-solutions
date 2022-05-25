/* exported zip */

// grab the corresponding index from each array and assign the pair into a new array
// return all the pairs of elements as arrays into a parent array

function zip(first, second) {
  var pairs = [];
  var subArr = [];
  var masterArr = [];

  if (first.length < second.length) {
    var len = first.length;
  } else {
    len = second.length;
  }

  for (var i = 0; i < len; i++) {
    pairs.push(first[i], second[i]);
  }

  for (var j = 0; j < pairs.length; j++) {
    subArr.push(pairs.slice(j, j + 2));
    j++;
  }

  for (var k = 0; k < subArr.length; k++) {
    masterArr.push(subArr[k]);
  }

  return masterArr;
}

// determine how many pairs of arrays are needed
// pair all matching indexed elements into an array
// push the pairs into their own indivual sub arrays
// push sub arrays into a master array
// this embarrassingly took me longer than it should have
