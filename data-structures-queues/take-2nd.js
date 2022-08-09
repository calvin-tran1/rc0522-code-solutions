/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;
  const front = queue.dequeue();
  queue.enqueue(front);
  const second = queue.peek();
  queue.dequeue();
  return second;
}
