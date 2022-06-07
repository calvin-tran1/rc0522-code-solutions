function ExampleConstructor() {

}
console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('value of ExampleConstructor:', typeof ExampleConstructor.prototype);

var exConstructor = new ExampleConstructor();
console.log('value of exConstructor:', exConstructor);

var instExConstructor = exConstructor instanceof ExampleConstructor;
console.log('value of instExConstructor:', instExConstructor);
