var arr = [
  { isbn: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { isbn: '2', title: 'The Giving Tree', author: 'Shel Silverstein' },
  { isbn: '3', title: 'The Cat in the Hat', author: 'Dr. Seuss' }
];

console.log(arr, typeof arr);

var jsonBooks = JSON.stringify(arr);

console.log(jsonBooks, typeof jsonBooks);

var student = '{"number id":"0001", "name":"calvin"}';

console.log(student, typeof student);

var json = JSON.parse(student);

console.log(json, typeof json);
