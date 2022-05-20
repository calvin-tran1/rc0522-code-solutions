/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var swapIndex = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = swapIndex;
  return array.join('');
}
