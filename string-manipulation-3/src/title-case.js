/* exported titleCase */

function titleCase(title) {
  title = title.toLowerCase().split(' ');
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];

  for (var i = 0; i < title.length; i++) {
    if (title[i] === 'javascript') {
      title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1, 4) + title[i].charAt(4).toUpperCase() + title[i].slice(5);
    }
    if (title[i] === 'javascript:') {
      title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1, 4) + title[i].charAt(4).toUpperCase() + title[i].slice(5);
    }
    if (title[i] === 'api') {
      title[i] = title[i].toUpperCase();
    }
    if (title[i].includes('-')) {
      var [before, after] = title[i].split('-');
      var capBefore = before.charAt(0).toUpperCase() + before.substring(1);
      title[i] = capBefore + '-' + after.charAt(0).toUpperCase() + after.substring(1);
      title[i + 1] = title[i + 1].charAt(0).toUpperCase() + title[i + 1].substring(1);
      i++;
    }
    if (title[i].includes(':')) {
      title[i + 1] = title[i + 1].charAt(0).toUpperCase() + title[i + 1].substring(1);
      i++;
    }
    if (i > 0 && exceptions.includes(title[i])) {
      continue;
    }
    title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1);
  }
  return title.join(' ');
}
