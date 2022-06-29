const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const operator = process.argv[3];
const value1 = parseInt(process.argv[2]);
const value2 = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('result:', add(value1, value2));
}
if (operator === 'minus') {
  console.log('result:', subtract(value1, value2));
}
if (operator === 'times') {
  console.log('result:', multiply(value1, value2));
}
if (operator === 'over') {
  console.log('result:', divide(value1, value2));
}
