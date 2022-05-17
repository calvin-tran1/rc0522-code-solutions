function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

var fiveMinutes = convertMinutesToSeconds(5);
console.log(fiveMinutes);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetBeavis = greet('beavis');
console.log(greetBeavis);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaRectangle = getArea(17, 42);
console.log(areaRectangle);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var leloucheLamperouge = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(leloucheLamperouge);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var kingOfTheHill = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(kingOfTheHill);
