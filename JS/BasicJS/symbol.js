console.log("-------------------Symbol----------------------");

const symb1 = Symbol();
const symb2 = Symbol();
console.log(`${symb1 === symb2}`); //returns false

const symb3 = Symbol('cat');
const symb4 = Symbol('cat');
console.log(`${symb3 == symb4}`); //returns false

console.log("-------------------Why Symbol----------------------");

//The problem
//Imagine we have a user object with an id
let user = {
  id: 9876,
  name: 'Rich'
};
user.id = 12313123; //we accidently change the id property of user

// Solution - Using symbols
const idSymb = Symbol('id');
user[idSymb] = 2132131232; //process to add symbol to object
console.log(user);
console.log(user[idSymb]); //{ id: 12313123, name: 'Rich', [Symbol(id)]: 2132131232 }


console.log("-------------------Using Symbol in Objects----------------------");

const idSymb2 = Symbol('id');
let user2 = {
  id: 9876,
  name: 'Rich',
  [idSymb2]: 8787669 //creating symbol
}
console.log(user2); //{ id: 9876, name: 'Rich', [Symbol(id)]: 8787669 }

//Symbols do not generally show up
console.log(Object.getOwnPropertyNames(user2)); //prints [ 'id', 'name' ]
console.log(Object.getOwnPropertySymbols(user2)); //[ Symbol(id) ]



const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);

console.log("------------------- Global symbols----------------------");

//gives a global symbol but isnt unique to a descriptor
const sym1 = Symbol.for('cat');
const sym2 = Symbol.for('cat');
console.log(sym1 === sym2); //returns true

console.log(Symbol.keyFor(sym2)); //cat

console.log("------------------- Symbol Use cases----------------------");

const RED = 'red';
const BLUE = 'blue';
const cat = 'blue';

function getThreatLevel(color) {
  switch (color) {
    case RED:
      return 'severe';
    case BLUE:
      return 'high';
    default:
      console.log('Not sure of the color');
  }
}

console.log(getThreatLevel(BLUE)); //high
console.log(getThreatLevel(cat)); //high but should have returned default

//USing Symbols as we want each color to be completely unique
//When RED2 is declared as a symbol, it is the sole identifier and no other string or symbol can be used to identify it


const RED2 = Symbol('red');
const BLUE2 = Symbol('blue');
const cat2 = 'blue';

function getThreatLevel2(color) {
  switch (color) {
    case RED2:
      return 'severe';
    case BLUE2:
      return 'high';
    default:
      console.log('Not sure of the color');
  }
}

console.log('\n' + getThreatLevel2(BLUE2)); //high
console.log(getThreatLevel2(cat2)); //returns undefined

console.log("------------------- Symbol Use cases 2----------------------");
class Train {
  constructor(){
    this.length = 0;
  }
  add(car, contents){
    this[car] = contents;
    this.length++;
  }
}

let freightTrain = new Train();
freightTrain.add('refrig car', 'cattle');
freightTrain.add('flat car', 'aircraft');
freightTrain.add('tank car', 'milk');
freightTrain.add('hopper car', 'coal');

for (let car in freightTrain){
  console.log(car, freightTrain[car]); //print length 4
}

//With symbols
let length = Symbol('length');
class Train2 {
  constructor(){
    this[length] = 0;
  }
  add(car, contents){
    this[car] = contents;
    this[length]++;
  }
}

let freightTrain2 = new Train2();
freightTrain2.add('refrig car', 'cattle');
freightTrain2.add('flat car', 'aircraft');
freightTrain2.add('tank car', 'milk');
freightTrain2.add('hopper car', 'coal');

for (let car in freightTrain2){
  console.log(car, freightTrain2[car]); //does not print length
}

console.log("------------------- Symbol Use cases 3----------------------");
//use symbols as keys to prevent name clashes

class AlertService{
  constructor(){
    this.alerts = {};
  }
  addAlert(symbol, alertText){
    this.alerts[symbol] = alertText;
  }
  removeAlert(symbol){
    delete this.alerts[symbol];
  }
}

const alertService = new AlertService();

class MyComponent{
  constructor(thing){
    this.componentId = Symbol(thing);
  }
  errorHandler(msg){
    alertService.addAlert(this.componentId, msg);
    setTimeout(() => {
      alertService.removeAlert(this.componentId);
      console.log('Removed alert', this.componentId);
    }, 1000);
  }
}

let list = new MyComponent('listComp'); //will be both diff 
let list2 = new MyComponent('listComp');//will be both diff 
let form = new MyComponent('inputComp');

list.errorHandler('Problem1');
list2.errorHandler('Uh Oh');

console.log("------------------- ----------------------");