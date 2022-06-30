const fs = require('fs');
const getRandom = Math.random().toString();

fs.writeFile('random.txt', `${getRandom}\n`, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
