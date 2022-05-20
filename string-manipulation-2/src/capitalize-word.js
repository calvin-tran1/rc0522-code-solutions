/* exported capitalizeWord */

// make adjustment to given strings so only the first letter is capitalized
// unless the string is some variation of 'javascript', make it so it === 'JavaScript'
// return values

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  if (lower === 'javascript') {
    return lower.charAt(0).toUpperCase() + lower.slice(1, 4) + lower.charAt(4).toUpperCase() + lower.slice(5);
  } else {
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
}

// convert all characters within string to lowercase in order to allow for a uniformed check ignoring case-sensitivity --completed
// if any case-variation of 'javascript' is passed as the argument change the value to 'JavaScript' --completed
// otherwise all other strings will have the first character capitalized, and the following characters lowercased --completed
