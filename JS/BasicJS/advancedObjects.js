//THIS keyword
const goat = {
  dietType: 'herbivore',
  makeSound() {
    // console.log('baaa');
  },
  diet() {
    // console.log(this.dietType); //without this it throws a reference error
  }
};

goat.diet(); 
// Output: herbivore

//THIS in arrow functions
//If we use the this keyword in a method then the value of this is the calling object.

const goat2 = {
  dietType: 'herbivore',
  makeSound() {
    // console.log('baaa');
  },
  diet: () => {
    // console.log(this.dietType);  //DO NOT USE ARROW FUNCTIONS WITH THIS
  }
};

goat.diet(); // Prints undefined


//PRIVACY
// / One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
//JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
const bankAccount = {
  _amount: 1000
}

// /Getters are methods that get and return the internal properties of an object.
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    };
  }
};

person.fullName; // 'John Doe' calling GETTER - without ()

const person2 = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
// person2.age = 40;
// console.log(person2._age); // Logs: 40
// person2.age = '40'; // Logs: You must assign a number to age


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

// robot.numOfSensors = 100;
// console.log(robot.numOfSensors);

//FACTORY FUNCTIONS
// /A factory function is a function that returns an object and can be reused to make multiple object instances. 

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  };
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
// ghost.scare(); // 'BOO!'


//DESTRUCTURING
const monsterFactory2 = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
//or
const monsterFactory3 = (name, age) => {
  return { 
    name,
    age 
  }
};

//DESCTRUCTURED ASSIGNMENT
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  } 
};
// const residence = vampire.residence; 
// console.log(residence); // Prints 'Transylvania' 
//or
// const { residence } = vampire; 
// console.log(residence); // Prints 'Transylvania'


const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'


const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

//We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

