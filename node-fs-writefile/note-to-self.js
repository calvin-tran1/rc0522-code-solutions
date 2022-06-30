const fs = require('fs');

const input = process.argv[2];

fs.writeFile('note.txt', `${input}\n`, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
