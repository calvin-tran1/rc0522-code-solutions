var student = {
  firstName: 'Calvin',
  lastName: 'Tran',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'sales';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previous.Occupation', student.previousOccupation);

var vehicle = {
  make: 'porsche',
  model: 'taycan',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'bob',
  type: 'fish'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
