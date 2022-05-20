/* exported numVowels */

function numVowels(string) {
  var vowels = 'aeiou';
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
