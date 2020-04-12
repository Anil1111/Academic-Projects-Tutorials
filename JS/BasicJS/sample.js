// /There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. And objects

// Common methods
let dateToday = new Date();
let thisYear = dateToday.getFullYear();

//implicit return using arrow notation in a function
const double = num => num *2;

function double1(num) {
  let sum = num * 2;
  return sum;
}

// Good scoping example
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink'; //redeclare the color variable inside
    console.log(color); // pink
  }
  console.log(color); // blue 
};
//console.log(color); // ReferenceError; Avoid reference error

//Switch example
const calculateWeight = (earthWeight , planet)  => {
  let weight;
  switch (planet) {
    case 'Mercury':
      return weight = earthWeight * 0.378;
      break;
    case 'Venus':
      return weight = earthWeight * 0.907;
      break;      
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};
// console.log(calculateWeight(80, 'abc'));

//Calculate truthy or falsy
const truthyOrFalsy = value => {
  if (value) {
      return true;
  }
  return false;
};
//or
const truthyOrFalsy2 = value => value ? true : false;


//Arrays
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4'); //Adds elements
itemTracker.pop(); //returns the element that is removed from end of the array
itemTracker.shift(); //removes first element from the array
itemTracker.unshift('item5'); //adds new element to the front of the array
itemTracker.indexOf('item5'); //returns the index of the element
itemTracker.length; //prints the length of the array

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
let removedItems = vegetables.splice(1, 2); // ["Cabbage", "Carrot"] (the original array is changed); to remove a set of elements from the array
//console.log(vegetables[vegetables.length - 1]); // logs 'this is the last element'
let removedItems2 = vegetables.slice(1, 3);  //return a new array made from index 1 copying 3 elements


//Loops
for (let counter = 3; counter >= 0; counter--){
  // console.log(counter);
};

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  // console.log(animals[i]);
};

let counterTwo = 1;
while (counterTwo < 4) {
  // console.log(counterTwo);
  counterTwo++;
};

// do...while will run at least once whether or not the condition evaluates to true
let countString = '';
let z = 0;
do {
  countString = countString + z;
  z++;
} while (z < 5);

//Whale program
const input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
const resultArray = [];

let i = 0;
let j = 0;

while(i < input.length) {
  j = 0;
  while(j < vowels.length) {
     if (input[i] === vowels[j]) {
       resultArray.push(input[i]);
       (input[i] === 'e' || input[i] === 'u') ?  resultArray.push(input[i]) : '';
     };
    j++;     
  }
  i++;
};
// console.log(resultArray.join('').toUpperCase());

let str = 'hello';
str = str + ' '.repeat(5); //Output - 'hello     '
