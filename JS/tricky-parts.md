# Tricky Parts

## Difference between == and ===

`=` is used for assigning values to a variable in JavaScript.  
`==` is used for comparison between two variables irrespective of the datatype of variable.  
`===` is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.  

`100==100` means both are int values and the other condition, `100 == "100"` means int comparison with "100" string type of variable still returns true. It means == is not doing a strict type check.

It returns true for 100 === 100 and it returns false for 100 === "100". It means === does a strict check for comparison. It checks datatype also and does a comparison based on it.

---

## This in JS

this refers to the object that is executing the current function

### If `this` is called from a method on an object, refers to the object

```javascript
const video = {
  title: 'a',
  play() {
    console.log(this); // this refers to the video object
  }
};

video.play();

video.stop = function(){
  console.log(this); //refers to video object as stop is method in video object
}

video.stop();
```

### If `this` is called on a regular function(not part of an object ), refers to the global object (window - browsers; global - node)

```javascript
  function playVideo(){
    console.log(this); //refers to the global object
  }

  playVideo();
```

Constructor functions

```javascript
  function Video(title){
    this.title = title;
    console.log(this);
  }

  const v = new Video(); //this will refer to a new {} empty object of Video
```

Inner function

```javascript
  const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag){
        console.log(this.title + tag);  //this refers to the global object as it is a general function
      });
    }
  };

  video.showTags();
```

To solve above problem

```javascript
  const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag){
        console.log(this.title + tag);  //this now refers ti video object as we are passing this as argument to forEach
      }, this);
    }
  };

  video.showTags();
```

---

## The mystery of this

`this` is the current execution context of a function.  
The language has 4 function invocation types:

- function invocation: `alert('Hello World!')`
- method invocation: `console.log('Hello World!')`
- constructor invocation: `new RegExp('\\d')`
- indirect invocation: `alert.call(undefined, 'Hello World!')`

Detailed explanation about it: [Mystery of this](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/).

## Symbol in JS

For normal primitive types:

1. Number(3) or 3
2. String('abc') or 'abc'
3. Boolean(true) or true

For Symbol primitive data type, we need to use the notation `Symbol(description)`

```javascript
const s1 = Symbol();
const s2 = Symbol(123);
const s3 = Symbol('Rich');
```

All `Symbol()` generates guaranteed unique values  
_You can think of each of them having extremely large unique numbers_  
**It is used as a unique identifiers in object properties**
Will always create a new Symbol

```javascript
const symb1 = Symbol();
const symb2 = Symbol();
console.log(`${symb1 === symb2}`); //returns false for === and ==

const symb3 = Symbol('cat');
const symb4 = Symbol('cat');
console.log(`${symb3 == symb4}`); //returns false
```

### Symbols from Global Registry

```javascript
//gives a global symbol but isnt unique to a description
const sym1 = Symbol.for('cat');  //checks whether 'cat' symbol exists in registry and if exists returns it or else creates it
const sym2 = Symbol.for('cat');
console.log(sym1 === sym2); //returns true for == and ===

//provides the key/desciption for the symbol
console.log(Symbol.keyFor(sym2)); //cat
```

### Using Symbols in Objects

```javascript
let user ={
  id: 9876,
  name: 'Rich'
};

const idSymb = Symbol('id');
user[idSymb] = 2132131232; //process to add symbol to object
// user[Symbol('id')] = 2132131232; //process to add symbol to object
console.log(user);
console.log(user[idSymb]); //{ id: 9876, name: 'Rich', [Symbol(id)]: 2132131232 }
```

```javascript
const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]); //123
```

### Symbols are hidden

```javascript
console.log(Object.getOwnPropertyNames(user2)); //prints [ 'id', 'name' ]
console.log(Object.getOwnPropertySymbols(user2)); //[ Symbol(id) ]
```

### Use Cases

```javascript
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
console.log(getThreatLevel2(cat2)); //returns undefined as cat2 is a string 'blue' whereas BLUE2 is a unique symbol
```
