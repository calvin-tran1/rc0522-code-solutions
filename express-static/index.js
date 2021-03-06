const express = require('express');
const path = require('path');
const app = express();

const pathJoin = path.join(__dirname, 'public');
console.log(pathJoin);

const expressStatic = express.static(pathJoin);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
