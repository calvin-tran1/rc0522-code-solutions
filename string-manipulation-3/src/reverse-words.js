/* exported reverseWords */

function reverseWords(string) {
  var reverse = string.split('').reverse().join('');
  return reverse.split(' ').reverse().join(' ');
}
