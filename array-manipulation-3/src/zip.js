/* exported zip */

// grab the corresponding index from each array and assign the pair into a new array
// return all the pairs of elements as arrays into a parent array

// function zip(first, second) {
//   var newArray = [];
//   for (var i = 0; i < arguments.length; i++) {
//     if (first[i] === second[i]) {
//       newArray.push(first[i] + second[i]);
//     }
//   }
//   return newArray;
// }

// function zip(first, second) {
//   var newArray = [];
//   var spliceFirst = first.splice(0);
//   var spliceSecond = second.splice(0);
//   for (var i = 0; i < arguments.length; i++) {
//     if ([i] === [i]) {
//       newArray.push(spliceFirst[i] + spliceSecond[i]);
//     }
//   }
//   return newArray;
// }

// function zip(first, second) {
//   var newArray = [];
//   var spliceFirst = first.splice(0);
//   var spliceSecond = second.splice(0);
//   for (var i = 0; i < arguments.length; i++) {
//     newArray.push(spliceFirst[i] + spliceSecond[i]);
//   }
//   return newArray;
// }

// function zip(first, second) {
//   var newArray = [];
//   for (var i = 0; i < arguments.length; i++) {
//     var slice1 = first.slice(i);
//     var slice2 = second.slice(i);
//     newArray.push(slice1[i] + slice2[i]);
//   }
//   return newArray;
// }

// function zip(first, second) {
//   var result = [];
//   var pairs = [];
//   for (var i = 0; i < arguments.length; i++) {
//     result.push(first[i]);
//     result.push(second[i]);
//   }
//   return result;
// }

// function zip(first, second) {
//   var result = [];
//   if (first.length > second.length) {
//     for (var i = 0; i < first.length; i++) {
//       result.push(first[i]);
//       result.push(second[i]);
//     } else if (first.length < second.length) {
//       for (var i = 0; i < second.length; i++) {
//         result.push(first[i]);
//         result.push(second[i]);
//       }
//     }
//   }
//   return result;
// }

function zip(first, second) {
  var pairs = [];
  var subArr = [];
  var masterArr = [];

  for (var i = 0; i < first.length; i++) {
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
