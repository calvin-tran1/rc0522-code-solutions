/* exported defaults */

// function defaults(target, source) {
//   for (var property in source) {
//     if (source.hasOwnProperty(property) && !target.hasOwnProperty(property)) {
//       target[property] = source[property];
//     }
//   }
// }

function defaults(mainObject, objectToMerge) {
  Object.keys(objectToMerge).forEach(key => {
    if (!mainObject[key]) mainObject[key] = objectToMerge[key];
  });
  return mainObject;
}
