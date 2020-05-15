
console.log('\n ------------ Function invocation -------------------');
//Normal Type of function invocation
function hello(name) {
  return 'Hello ' + name + '!';
}
const message = hello('World');
console.log('Function Type 1 - ' + message); // => 'Hello World!'

//Advanced function invocation
const message2 = (function (name) {
  return 'Hello ' + name + '!';
})('World');
console.log('Function Type 2 - ' + message2) // => 'Hello World!'


// 'This' in a normal function = global / window in browser
function sum(a, b) {
  console.log(`THIS in a normal function - ${this === global}`); // => true
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16);     // => 31
global.myNumber; // => 20



//this in a function invocation, strict mode
function execute() {
  'use strict';
  function concat(str1, str2) {
    // the strict mode is enabled too
    console.log(`This' in a strict mode - ${this === undefined}`); // => true
    return str1 + str2;
  }
  // concat() is invoked as a function in strict mode
  // this in concat() is undefined
  concat('Hello', ' World!'); // => "Hello World!"
}
execute();


function nonStrictSum(a, b) {
  // non-strict mode
  console.log(`This' in a non strict mode - ${this === global}`); // => true
  return a + b;
}
function strictSum(a, b) {
  'use strict';
  // strict mode is enabled
  console.log(`This' in a strict mode - ${this === undefined}`); // => true
  return a + b;
}
// nonStrictSum() is invoked as a function in non-strict mode
// this in nonStrictSum() is the window object
nonStrictSum(5, 6); // => 11
// strictSum() is invoked as a function in strict mode
// this in strictSum() is undefined
strictSum(8, 12); // => 20

//this in an inner function - NO this binding
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(`Outside a function - ${this === numbers}`); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(`inside a function / inner function - ${this === numbers}`); // => false
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers.sum(); // => NaN or throws TypeError in strict mode

//this in an inner function - WITH this binding
const numbers2 = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(`Outside a function with THIS bound - ${this === numbers2}`); // => true
    function calculate() {
      console.log(`Inside a function with THIS bound - ${this === numbers2}`); // => true
      return this.numberA + this.numberB;
    }
    // use .call() method to modify the context
    return calculate.call(this);
  }
};
numbers2.sum(); // => 15

//this in an inner function - WITH this binding - Arrow function
const numbers3 = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(`Outside a Arrow function with THIS bound - ${this === numbers3}`);// => true
    const calculate = () => {
      console.log(`Inside a Arrow function with THIS bound - ${this === numbers3}`); // => true
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers3.sum(); // => 15

console.log('\n ------------ Method invocation -------------------');
const myObject = {
  // helloFunction is a method
  helloFunction: function () {
    return 'Hello World!';
  }
};
let message3 = myObject.helloFunction();


//this in a method invocation
const calc = {
  num: 0,
  increment() {
    console.log(`The calculate function - ${this === calc}`); // => true
    this.num += 1;
    return this.num;
  }
};
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2


////this in a method invocation - from javascript object
const myDog = Object.create({
  sayName() {
    console.log(`The myDog constructor - ${this === myDog}`); // => true
    return this.name;
  }
});
myDog.name = 'Milo';
// method invocation. this is myDog
myDog.sayName(); // => 'Milo'



//this in a method invocation - from class
class Planet {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`The class of Planet - ${this === earth}`); // => true
    return this.name;
  }
}
const earth = new Planet('Earth');
// method invocation. the context is earth
earth.getName(); // => 'Earth'


//Pitfall: separating method from its object

//Normal function
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = function () {
    console.log(`The Pet function, comparison - ${this === myCat}`); // => false
    console.log(`The Pet function - The ${this.type} has ${this.legs} legs`);
  }
}
const myCat = new Pet('Cat', 4);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
setTimeout(myCat.logInfo, 1000);
myCat.logInfo();

//With Binding of this
function Pet2(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(`The Pet2 bind function, comparison - ${this === myCat}`); // => true
    console.log(`The Pet2 bind function - The ${this.type} has ${this.legs} legs`);
  };
}
const myCat2 = new Pet2('Cat', 4);
// Create a bound function
const boundLogInfo = myCat2.logInfo.bind(myCat2);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);


//Arrow function
function Pet3(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = () => {
    console.log(`The Pet3 arrow function, comparison - ${this === myCat}`); // => true
    console.log(`The Pet3 arrow function - The ${this.type} has ${this.legs} legs`);
  };
}
const myCat3 = new Pet3('Cat', 4);
// logs "The Cat has 4 legs"
setTimeout(myCat3.logInfo, 1000);
myCat3.logInfo();



console.log('\n ------------ Constructor invocation -------------------');

class City {
  constructor(name, traveled) {
    this.name = name;
    this.traveled = false;
  }

  travel() {
    this.traveled = true;
  }
}
const paris = new City('Paris', false);
paris.travel();


function Foo() {
  // this is fooInstance
  this.property = 'Default Value';
}
// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'

//is same as
class Bar {
  constructor() {
    // this is barInstance
    this.property = 'Default Value';
  }
}
// Constructor invocation
const barInstance = new Bar();
barInstance.property; // => 'Default Value'


//Pitfall: forgetting about new
function Vehicle(type, wheelsCount) {
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Function invocation
const car = Vehicle('Car', 4);
car.type; // => 'Car'
car.wheelsCount // => 4
console.log(`The vehicle constructor that is not a NEW object- ${car === global}`); // => true


console.log('\n ------------ Indirect invocation -------------------');
//It can be used to simulate a method call on an object

const rabbit = { name: 'White Rabbit' };
function concatName(string) {
  console.log(`Call rabbit - ${this === rabbit}`); // => true
  return string + this.name;
}
// Indirect invocations
concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'
concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'


// ------------------ Bound Function -------------------')
function multiply(number) {
  'use strict';
  return this * number;
}
// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
double(3); // => 6
double(10); // => 20



// this inside a bound function
const numbers4 = {
  array: [3, 5, 10],
  getNumbers() {
    return this.array;
  }
};

// Create a bound function
const boundGetNumbers = numbers4.getNumbers.bind(numbers4);
boundGetNumbers(); // => [3, 5, 10]
// Extract method from object
const simpleGetNumbers = numbers4.getNumbers;
simpleGetNumbers(); // => undefined or throws an error in strict mode


console.log('\n ------------ Arrow Function -------------------');
console.log('------------ IGNORE all pet function from Method Invocation -------------------');

//Arrow function is designed to declare the function in a shorter form and lexically bind the context.
const hello2 = (name) => {
  return 'Hello ' + name;
};
hello2('World'); // => 'Hello World'
// Keep only even numbers
[1, 2, 5, 6].filter(item => item % 2 === 0); // => [2, 6]


const sumArguments = (...args) => {
  console.log(`Sum arguments ${typeof arguments}`); // => 'undefined'
  return args.reduce((result, item) => result + item);
};
sumArguments.name;      // => ''
sumArguments(5, 5, 6); // => 16


// /this in arrow function
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(`Point in Arrow functions - ${this === myPoint}`); // => true
    setTimeout(() => {
      console.log(`Point in Arrow functions and Timeout- ${this === myPoint}`);      // => true
      console.log(`Point in Arrow functions and Timeout - ${this.x} : ${this.y}`); // => '95:165'
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
myPoint.log();


