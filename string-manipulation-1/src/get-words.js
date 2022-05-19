/* exported getWords */

function getWords(string) {
  var empty = [];
  if (string === '') {
    return empty.fill(string);
  } else {
    return string.split(' ');
  }
}
