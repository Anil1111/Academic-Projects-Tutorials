//Higher order function
// JavaScript functions are first-class objects, so they have properties and methods like any object

// Functions can be passed into other functions as parameters

// A higher-order function is a function that either accepts functions as parameters, returns a function, or both
const addTwo = num => num + 2;

const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return 'This function returned inconsistent results';
  }
};

// console.log(checkConsistentOutput(addTwo, 10));


//Iterator methods
//a callback function is a function passed as an argument into another function.
//forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
//The return value for .forEach() will always be undefined.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  // console.log(`${artist} is one of my favorite artists.`);
});
//or
artists.forEach(artist => {
  // console.log(artist + ' is one of my favorite artists.'); //prints te log for each artist
});


// When .map() is called on an array, it takes an argument of a callback function and returns a new array!
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => number * 10);
// console.log(bigNumbers); //all the numbers will be multiplied by 10 // Output: [10, 20, 30, 40, 50]



//Filter
//Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => {
  return word.length < 6;
});
//Or
const longFavoriteWords = words.filter(function (word) {
  return word.length > 7;
});
//or
const longFavoriteWords2 = words.filter((word) => {
  return word.length > 7;
});
//console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']


//findIndex()
//We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
// console.log(lessThanTen); // Output: 3 


//reduce
//The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
const nums = [1, 2, 4, 10];

const summedNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
// console.log(summedNums) // Output: 17
//or
const summedNums2 = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100);  // <- Second argument- 100 for .reduce()

// console.log(summedNums2); // Output: 117


//some
// /it finds the one where callback returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. Otherwise, some() returns false
const words3 = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// console.log(words3.some((word) => {
//   return word.length < 6; //Output - true
// }));

//every
// /The every() method tests whether all elements in the array pass the test implemented by the provided function.

// console.log(words3.every((word) => {
//   return word.length > 5} )); //Outut - true



const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.


//Sort
//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const months = ['March', 'Jan', 'Feb', 'Dec', 'April', 'May'];
months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [100, 30, 44, 21, 100000, 2000];
array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

//arr.sort([compareFunction])
// /Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
//If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
const sortYears = arr => arr.sort((x, y) => y - x); //descending order
const sortYears2 = arr => arr.sort(); //ascending order

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
// console.log(sortYears(years));


// Find()
// The find() method returns the value of the first element in an array that pass a test (provided as a function).
//If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
//Otherwise it returns undefined
const year1963 = years.find(year => {
  return year === 1963;
})
console.log(year1963);

