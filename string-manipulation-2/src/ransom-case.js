/* exported ransomCase */

// uniform sting so all characters are same case --completed
// assign empty string to a variable --completed
// convert string so that every other character is lowercased --completed
// add new value to empty string --completed

function ransomCase(string) {
  var upper = string.toUpperCase();
  var newString = '';
  for (var i = 0; i < upper.length; i++) {
    if (i % 2 === 0) {
      newString += upper.charAt(i).toLowerCase();
    } else {
      newString += upper.charAt(i);
    }
  }
  return newString;
}
