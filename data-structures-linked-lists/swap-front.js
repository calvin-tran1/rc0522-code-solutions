/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const ogHead = list.data;
    const newHead = list.next.data;
    list.data = newHead;
    list.next.data = ogHead;
    return list;
  }
  return list;
}
