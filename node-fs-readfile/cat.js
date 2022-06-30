const fs = require('fs');
let input;

for (let i = 2; i < process.argv.length; i++) {
  input = process.argv[i];
  fs.readFile(input, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
