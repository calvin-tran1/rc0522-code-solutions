/* exported capitalizeWords */

function capitalizeWords(string) {
  var stringLower = string.toLowerCase();
  var splitString = stringLower.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
  }
  return splitString.join(' ');
}
