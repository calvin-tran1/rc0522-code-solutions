const fs = require('fs');
const data = require('./data.json');
const operator = process.argv[2];

if (operator === 'read') {
  console.log(data.notes);
}

if (operator === 'create') {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

if (operator === 'delete') {
  for (const i in data.notes) {
    if (process.argv[3] === i) {
      delete data.notes[i];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    }
  }
}

if (operator === 'update') {
  for (const i in data.notes) {
    if (process.argv[3] === i) {
      data.notes[i] = process.argv[4];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    }
  }
}
