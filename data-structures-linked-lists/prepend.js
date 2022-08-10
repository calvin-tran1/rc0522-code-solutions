/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const x = new LinkedList(value);
  x.next = list;
  return x;
}
