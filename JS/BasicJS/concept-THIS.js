
console.log('\n ------------ Function invocation -------------------');
/* 
In JavaScript the situation is different: this is the current execution context of a function. The language has 4 function invocation types:

function invocation: alert('Hello World!')
method invocation: console.log('Hello World!')
constructor invocation: new RegExp('\\d')
indirect invocation: alert.call(undefined, 'Hello World!')
 */

console.log('------------ Normal Type of function invocation -------------------');
function hello(name) {
  return 'Hello ' + name + '!';
}
const message = hello('World');
console.log('Function Type 1 - ' + message); // => 'Hello World!'


console.log('------------ Advanced function invocation -------------------');

const message2 = (function (name) {
  return 'Hello ' + name + '!';
})('World');
console.log('Function Type 2 - ' + message2) // => 'Hello World!'

console.log('------------ This in a normal function = global / window in browser-------------------');

let myNumber;
function sum(a, b) {
  console.log(`THIS in a normal function - ${this === global}`); // => true
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}
// sum() is invoked as a function invocation;this in sum() is a global object (window in browsers)
sum(15, 16);     // => 31
global.myNumber; // => 20


//if this is used outside the function scope, it still refers to the global object:
console.log(`this outside the function ${this === global}`); // => true
let myString = 'Hello World!'; //is local to the module
myString2 = 'Crazy World'; //is a global varaible
global.myString3 = 'More crazier'; //is defined on the global of node 
console.log('this on a local constant ' + myString); // => 'Hello World!'
console.log('this on a global constant ' + myString2); // => 'Hello World!'
console.log('this on a global constant ' + global.myString3); // => 'Hello World!'



console.log('------------ this in a function invocation, strict mode-------------------');
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

console.log('------------ this in NON Strict Mode-------------------');

function nonStrictSum(a, b) {
  // non-strict mode
  console.log(`This' in a non strict mode - ${this === global}`); // => true
  console.log(`This' in a non strict mode -Undefined - ${this === undefined}`); // => false
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

console.log('------------ PITFALL 1-------------------');
console.log('------------ this in an inner function - NO this binding-------------------');
// A common trap with the function invocation is thinking that this is the same in an inner function as in the outer function.
//below the inner function is invoked as a function alone

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

//numbers.sum() is a method invocation on an object (see 3.), so the context in sum is numbers object
//calculate() is a function invocation (but not method invocation), thus here this is the global object window
//To make this have a desired value, modify the inner function’s context with indirect invocation (using .call() or .apply().) or create a bound function (using .bind()


console.log('------------Solution 1 - this in an inner function - Using Call-------------------');
const numbers2 = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(`Outside a function with THIS bound - ${this === numbers2}`); // => true
    function calculate() {
      console.log(`Inside a function with THIS bound - ${this === numbers2}`); // => true
      return this.numberA + this.numberB;
    }
    // use .call() method to modify the context, an indirect invocation
    //adds the context of this to the function invocation explicitly
    return calculate.call(this);
  }
};
numbers2.sum(); // => 15

console.log('------------Solution 2 - this in an inner function- Arrow function-------------------');

//The arrow function binds this lexically, or simpler just uses this value of sum() method.

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


console.log('\n\n ------------ Method invocation -------------------');
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

console.log(' ------------ this in a method invocation - from javascript object-------------------');
const myDog = Object.create({
  sayName() {
    console.log(`The myDog constructor - ${this === myDog}`); // => true
    return this.name;
  }
});
myDog.name = 'Milo';
// method invocation. this is myDog
myDog.sayName(); // => 'Milo'


console.log(' ------------ this in a method invocation - from class-------------------');

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

console.log(' ------------Pitfall2 : separating method from its object-------------------');

//Normal function
function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = function (prefix) {
    console.log(`${prefix} The Pet function, comparison - ${this === myCat}`); // => false
    console.log(`${prefix} The Pet function - The ${this.type} has ${this.legs} legs`);

  }
}
const myCat = new Pet('Cat', 4);
myCat.logInfo('Normal Function'); //will work normlly

setTimeout(myCat.logInfo.bind(this, 'SETTIMEOUT Normal Function'), 1000);
// SETTIMEOUT Normal Function The Pet function, comparison - false
//SETTIMEOUT Normal Function The Pet function - The undefined has undefined legs

console.log(' ------------Solution 1 : With Binding of this-------------------');

function Pet2(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function (prefix) {
    console.log(`${prefix} The Pet2 bind function, comparison - ${this === myCat2}`); // => true
    console.log(`${prefix} The Pet2 bind function - The ${this.type} has ${this.legs} legs`);
  };
}
const myCat2 = new Pet2('Dog', 6);
myCat2.logInfo('Normal Bound function'); //will work normally

const boundLogInfo2 = myCat2.logInfo.bind(this, 'SETTIMEOUT Bound Function'); //will not work as this is global
setTimeout(boundLogInfo2, 1000);

// Create a bound function
const boundLogInfo = myCat2.logInfo.bind(myCat2, 'SETTIMEOUT Bound Function');
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);


console.log(' ------------Solution 2 : With Arrow Function-------------------');
function Pet3(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = (prefix) => {
    console.log(`${prefix} The Pet3 arrow function, comparison - ${this === myCat3}`); // => true
    console.log(`${prefix} The Pet3 arrow function - The ${this.type} has ${this.legs} legs`);
  };
}
const myCat3 = new Pet3('Alien', 8);
// logs "The Cat has 4 legs"
setTimeout(myCat3.logInfo.bind(this, 'SETTIMEOUT Arrow Function'), 1000);
myCat3.logInfo('Normal Arrow function');




console.log('\n ------------ Constructor invocation -------------------');


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

console.log(' ------------ Pitfall3: forgetting about new -------------------');

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


console.log('\n ------------ Indirect invocation -Call & Apply -------------------');
//It can be used to simulate a method call on an object

const rabbit = { name: 'White Rabbit' };
function concatName(string) {
  console.log(`Call rabbit - ${this === rabbit}`); // => true
  return string + this.name;
}
// Indirect invocations
concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'
concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'


console.log('------------ Bound invocation - Bind-------------------');
function multiply(number) {
  'use strict';
  return this * number;
}
// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
double(3); // => 6
double(10); // => 20



console.log('------------ This in Bound Function-------------------');
//this is the first argument of .bind() when invoking a bound function
//The role of .bind() is to create a new function, which invocation will have the context as the first argument passed to .bind(). 

const numbers4 = {
  array: [3, 5, 10],
  getNumbers() {
    return this.array;
  }
};

// Extract method from object
const simpleGetNumbers = numbers4.getNumbers;
console.log(numbers4.getNumbers()); //works
console.log(simpleGetNumbers()); // undefined or throws an error in strict mode

const boundGetNumbers = numbers4.getNumbers.bind(numbers4); // Create a new bound function
console.log(boundGetNumbers()); // => [3, 5, 10]

//.bind() makes a permanent context link and will always keep it. A bound function cannot change its linked context when using .call() or .apply() with a different context or even a rebound doesn’t have any effect.



console.log('\n ------------ Arrow Function -------------------');

//Arrow function is designed to declare the function in a shorter form and lexically bind the context.
const hello2 = (name) => {
  return 'Hello ' + name;
};
hello2('World'); // => 'Hello World'


// /this in arrow function
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  log() {
    console.log(`Point in Arrow functions - ${this === myPoint}`); // => true
    //setTimeout() calls the arrow function with the same context (myPoint object) as the log() method
    setTimeout(() => {
      console.log(`Point in Arrow functions and Timeout- ${this === myPoint}`);      // => true
      console.log(`Point in Arrow functions and Timeout - ${this.x} : ${this.y}`); // => '95:165'
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
myPoint.log();


console.log('------------ Pitfall 4- Defining method with an arrow function -------------------');

function Period (hours, minutes) { 
  this.hours = hours;
  this.minutes = minutes;
}

Period.prototype.format = () => {
  console.log(`${this === global}`); // => true
  return this.hours + ' hours and ' + this.minutes + ' minutes';
};

const walkPeriod = new Period(2, 30);
console.log(walkPeriod.format()); // => 'undefined hours and undefined minutes'



console.log('\n\n------------ Executing all SET timeout functions -------------------');