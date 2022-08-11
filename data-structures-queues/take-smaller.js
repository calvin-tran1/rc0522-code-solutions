/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();

  if (first === undefined) {
    return second;
  }
  if (second === undefined) {
    return first;
  }
  if (first > second) {
    queue.enqueue(first);
    return second;
  }
  if (first < second) {
    queue.enqueue(second);
    return first;
  }
  if (first === second) {
    queue.enqueue(first);
    return first;
  }
}
