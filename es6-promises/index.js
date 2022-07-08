const takeAChance = require('./take-a-chance');
const promise = takeAChance('Calvin');

promise.then(success => {
  console.log(success);
});

promise.catch(err => {
  console.log(err.message);
});
