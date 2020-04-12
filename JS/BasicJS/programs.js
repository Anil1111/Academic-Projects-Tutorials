//1. Reverse a String

const reverseString = (sampStr) => {
  const sampArr = sampStr.split('');
  // return sampArr.reverse().join(''); //Shortcut
  let testArr = [];

  for (let i = 0; i < sampStr.length; i++) {
    testArr.push(sampArr.pop());
  };
  return testArr.join('');

};
// console.log(reverseString('richard'));

//2. Reverse Array
const reverseArray = sampArr => {
  let reversedArr = [];
  let i = sampArr.length;
  while (i > 0) {
    reversedArr.push(sampArr.pop());
    i--;
  }
  return reversedArr;
};

// const reverseArray = arr => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//   }
//   return reversed
// }

const sentence = ['sense.', 'make', 'all', 'will', 'This'];
// console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//3. greetAliens()
// /Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

const greetAliens = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  };
};
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
// greetAliens(aliens);
//or
// const greetAliens = aliens.forEach(word => console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`));



//4. convertToBaby()
//Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '

const convertToBaby = arr => {
  let i = 0;
  let newArr = [];

  while (i < arr.length) {
    newArr[i] = 'baby ' + arr[i];
    i++;
  };
  return newArr;
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
// console.log(convertToBaby(animals));
//or
// const convertToBaby = animals.map(word => 'baby ' + word);
// console.log(convertToBaby);

//5. declineEverything() and acceptEverything()

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

// const declineEverything = veggies.forEach( veg => politelyDecline(veg));
// const acceptEverything = veggies.forEach( veg => console.log(`Ok, I guess I will eat some ${veg}`))
const declineEverything = arr => {
  arr.forEach(politelyDecline)
};
// As a function declaration:
// function declineEverything(arr) {
//   arr.forEach(politelyDecline)
// }
// declineEverything(veggies);

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  });
};
// acceptEverything(veggies);

//6. Square Numbers

const numbers = [2, 7, 9, 171, 52, 33, 14];
const toSquare = num => num * num;

// Write your code here:
// const squareNums = arr => {
//   return arr.map(toSquare);
// };
//or
// const squareNums = arr => {
//   return arr.map(num => toSquare(num));
// };
//or
const squareNums = arr => arr.map(toSquare) 
// console.log(squareNums(numbers));


//7. Shout greetings
const shoutGreetings = arr => arr.map(str => str.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]



//8. Sort Years:
// const sortYears = arr => arr.sort();
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

//const sortYears = arr => arr.sort();
//or
// const sortYears = arr => {
//   console.log(arr);
//   let i = arr.sort().length - 1;
//   console.log(arr);
//   let newArr = [];

//   while(i >= 0) {
//     newArr.push(arr[i]);
//     i--;
//   };
//   return newArr;
// };
//or
const sortYears = arr => arr.sort((x,y) => y-x); //sorting in descending order

// console.log(sortYears(years));


//9. justCoolStuff()
//Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// const justCoolStuff = (arr1, arr2) => {
//   return arr1.filter( str => arr2.includes(str));
// };
//or
const justCoolStuff = (arr1, arr2) => {
  const checkPresence = (str) => {
    for(let i = 0; i < arr2.length; i++) {
      if (str === arr2[i]) {
        return true;
      }; 
    };
    return false; 
  };

  return arr1.filter(word => checkPresence(word));
};

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
// console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]


//10.isTheDinnerVegan()
//isTheDinnerVegan() that takes in an array of food objects in the format: and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const isTheDinnerVegan = arr => {
  return arr.every(dinner => dinner.source === 'plant');
};

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
// console.log(isTheDinnerVegan(dinner))
// Should print false

//11.sortSpeciesByTeeth()

const sortSpeciesByTeeth = arr => arr.sort((dish1, dish2) => dish1.numTeeth - dish2.numTeeth);

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
// console.log(sortSpeciesByTeeth(speciesArray));


//12. findMyKeys()
const findMyKeys = arr => arr.includes('keys')? arr.findIndex(str => str === 'keys'): '-1';

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
// console.log(findMyKeys(randomStuff));
// Should print 4

//13. dogFactory()
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(name) {
      this._name = name;
    },
    set breed(breed) {
      this._breed = breed;
    },
    set weight(weight) {
      this._weight = weight;
    },
    bark() {
      return console.log('‘ruff! ruff!’');
    },
    eatTooManyTreats() {
      return this._weight + 1;
    }    
  };

};
const newdog = dogFactory('Joe', 'Pug', 27);
newdog.bark();
console.log(newdog.eatTooManyTreats());