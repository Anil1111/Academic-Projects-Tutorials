console.log("-------------------'Objects'----------------------");
//We use curly braces, {}, to designate an object literal:
//We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

// Objects store collections of key-value pairs.
// Each key-value pair is a property—when a property is a function it is known as a method.
// An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
// You can access, add or edit a property within an object by using dot notation or bracket notation.
//JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. It is the reference to the object, bound to the variable, that cannot be changed.
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',


//We *must* use bracket notation when accessing keys that have numbers, spaces, or special characters in them.
let spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship2['Active Duty'];   // Returns true
spaceship2['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship2['numCrew'];   // Returns 5 *** ALL KEYS SHOULD BE IN ''

console.log("-------------------Object----------------------");
// /Objects are mutable meaning we can update them after we create them!
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
// /If we tried to write our returnAnyProp() function with dot notation (returnAnyProp.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.


const spaceship3 = { type: 'shuttle' };
// spaceship3 = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship3.type = 'alien'; // Changes the value of the type property
spaceship3.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//You can delete a property from an object with the delete operator.
delete spaceship3.speed;  // Removes the mission


console.log("-------------------Mthods----------------------");
//When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
// /For example console is a global javascript object and .log() is a method on that object. Math is also a global javascript object and .floor() is a method on it.

const alienShip2 = {
  invade: function () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
//or
const alienShip = {
  invade() {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
// alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


console.log("-------------------Nested Objects----------------------");
let spaceship5 = {
  passengers: [{ name: 'Space Dog' }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceship5.crew.captain['favorite foods'][0];
let firstPassenger = spaceship5.passengers[0];

console.log("-------------------Pass by Reference----------------------");
//Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

const spaceship4 = {
  homePlanet: 'Earth',
  color: 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};
paintIt(spaceship4);
spaceship4.color // Returns 'glorious gold'


console.log("-------------------Re-assignment----------------------");
// /However, reassignment of the spaceship variable wouldn’t work in the same way:
let spaceship6 = {
  homePlanet: 'Earth',
  color: 'red'
};
let tryReassignment = obj => {
  obj = {
    identified: false,
    'transport type': 'flying'
  }
  // console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship6) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship6 = {
  identified: false,
  'transport type': 'flying'
}; // Regular reassignment still works.
//because When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
//When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.


console.log("-------------------loops----------------------");
let spaceship7 = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() { console.log('You got this!') }
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() { console.log('I agree, captain!') }
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() { console.log(`Jets on!`) }
    },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() { console.log('The tank is full!') }
    }
  }
};
// for...in
for (let crewMember in spaceship7['crew']) {
  // console.log(`${crewMember}: ${spaceship7.crew[crewMember].name}`)
};
//OR
for (let crewMember in spaceship7.crew) {
  console.log(`${crewMember}: ${spaceship7.crew[crewMember].name}`)
};


let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

//The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). 
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }


//hasOwnProperty() is a function which can be called on any object and takes a string as an input. It returns a boolean which is true if the property is located on the object, otherwise it returns false. hasOwnProperty() is located on Object. prototype and thus available for any object
let queryArguments = { 'emoji': '😀', 'name': 'happy' };
if (queryArguments.hasOwnProperty('emoji')) {
  console.log('done');
}
