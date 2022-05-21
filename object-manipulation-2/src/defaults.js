/* exported defaults */

function defaults(target, source) {
  for (var property in source) {
    if (property in target === false) {
      target[property] = source[property];
    }
  }
}
