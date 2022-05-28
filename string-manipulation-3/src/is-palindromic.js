/* exported isPalindromic */

function isPalindromic(string) {
  var stringNoSpce = string.split(' ').join('');
  var reverseString = stringNoSpce.split('').reverse().join('');

  if (stringNoSpce === reverseString) {
    return true;
  }
  return false;
}
