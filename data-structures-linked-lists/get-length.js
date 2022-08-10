/* exported getLength */

function getLength(list) {
  let nextNode = list.next;
  let count = 1;
  while (nextNode) {
    nextNode = nextNode.next;
    count++;
  }
  return count;
}
