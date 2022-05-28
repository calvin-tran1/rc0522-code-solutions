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
    if (i > 0 && exceptions.includes(title[i])) {
      continue;
    }
    title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1);
  }
  return title.join(' ');
}
