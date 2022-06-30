const fs = require('fs');
const getRandom = Math.random().toString();

fs.writeFile('random.txt', `${getRandom}\n`, () => {});
