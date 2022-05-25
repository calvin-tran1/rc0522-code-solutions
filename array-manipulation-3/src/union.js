/* exported union */

function union(first, second) {
  return [...new Set([...first, ...second])];
}
