const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => {
  return number * 2;
});
console.log('doubled', doubled);

const prices = numbers.map(number => {
  const dollarFormat = Number.parseFloat(number).toFixed(2);
  return `$${dollarFormat}`;
});
console.log('prices', prices);

const upperCased = languages.map(language => {
  return language.toUpperCase();
});
console.log('upperCased', upperCased);

const firstLetters = languages.map(language => {
  return language[0];
});
console.log('firstLetters', firstLetters);
