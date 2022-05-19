/* exported countdown */
function countdown(number) {
  var numbers = [];
  var i = number;
  while (i >= 0) {
    numbers.push(i);
    i--;
  }
  return numbers;
}
