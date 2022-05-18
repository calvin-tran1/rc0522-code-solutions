var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);

console.log('maximumValue:', maximumValue);

var heroes = [
  'flash',
  'batman',
  'doctor strange',
  'spiderman'
];

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'book1',
    author: 'author1'
  },
  {
    title: 'book2',
    author: 'author2'
  },
  {
    title: 'book3',
    author: 'author3'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log(library);

var fullName = 'Calvin Tran';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
