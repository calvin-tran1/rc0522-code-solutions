/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return;
  const top = stack.pop();
  stack.push(value);
  return stack.push(top);
}
