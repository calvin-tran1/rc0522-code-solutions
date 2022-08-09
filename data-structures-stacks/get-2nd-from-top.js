/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return;
  const removedTop = stack.pop();
  const secondFromTop = stack.peek();
  stack.push(removedTop);
  return secondFromTop;
}
