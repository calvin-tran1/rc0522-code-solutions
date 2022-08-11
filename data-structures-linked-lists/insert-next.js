/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const listNext = list.next;
  const insertedValue = new LinkedList(value);
  list.next = insertedValue;
  insertedValue.next = listNext;
  return list;
}
