/* exported isAnagram */

// remove all spaces
// check if any characters within first string match the second

function isAnagram(firstString, secondString) {
  var firstNoSpce = firstString.split(' ').join('');
  var secondNoSpce = secondString.split(' ').join('');
  var first = firstNoSpce.split('').sort().join('');
  var second = secondNoSpce.split('').sort().join('');

  if (first === second) {
    return true;
  }
  return false;
}
