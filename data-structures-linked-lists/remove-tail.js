/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;

  let prior = list;
  let listNext = list.next;
  while (listNext.next) {
    prior = listNext;
    listNext = listNext.next;
  }
  prior.next = null;
  return list;
}
