/* exported isPalindromic */

// remove all spaces
// reverse string
// check if string is equal to reverse

function isPalindromic(string) {
  var stringNoSpce = string.split(' ').join('');
  var reverseString = stringNoSpce.split('').reverse().join('');

  if (stringNoSpce === reverseString) {
    return true;
  }
  return false;
}
