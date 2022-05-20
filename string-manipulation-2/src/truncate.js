/* exported truncate */

// trim down string to given number of characters --completed
// append ellipsis to end of newly trimmed string --completed
// return new value --completed

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
