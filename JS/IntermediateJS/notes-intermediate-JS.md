# Intermediate JS

## CLASSES

Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the `constructor()` method every time it creates a new instance of a class.

```javascript
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

Dog is the name of our class. By convention, we _capitalize_ and _CamelCase_ class names.  
JavaScript will invoke the `constructor()` method every time we create a new instance of our Dog class.
Inside of the constructor() method, we use the `this` keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use `this` to set the value of the Dog instance’s name property to the name argument

### Instance

An instance is an object that contains the property names and methods of a class, but with unique property values

```javascript
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name);
```

### Methods

We also prepended our property names with underscores (`_name` and `_behavior`), which indicate these properties should NOT be accessed directly.  

```javascript
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}
```

### INHERITANCE

When multiple classes share properties or methods, they become candidates for `inheritance`.  
With inheritance, you can create a `parent` class (`superclass`) with properties and methods that multiple `child` classes (`subclasses`) share.  
The `extends` keyword makes the methods of the animal class available inside the cat class.  
The `super` keyword calls the constructor of the parent class. In this case, `super(name)` passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets `this._name = name;` for new Cat instances.  
In a `constructor()`, you must always call the `super` method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.  
When we call extends in a class declaration, all of the parent methods are available to the child class.  

```javascript
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
    get usesLitter() {
    return this._usesLitter;
  }
}
const bryceCat = new Cat('Bryce', false);
console.log(bryceCat.name);
```

### static method

we create a static method called `.generateName()` that returns a random name when it’s called. Because of the `static` keyword, we can only access `.generateName()` by appending it to the Animal class.  
You cannot access the `.generateName()` method from instances of the Animal class or instances of its subclasses

```javascript
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}
console.log(Animal.generateName()); // returns a name
const tyson = new Animal('Tyson');
tyson.generateName(); // TypeError
```

## MODULES

JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.  
By separating code with similar logic into files called modules, we can:

- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;
- prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js `module.exports` syntax.  
Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

```javascript
let Menu = {}; //creates the object that represents the module Menu.
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; // module.exports = Menu; exports the Menu object as a module.
// module is a variable that represents the module, and exports exposes the module as an object.
```

The pattern we use to export modules is thus:

- Create an object to represent the module.
- Add properties or methods to the module object.
- Export the module with module.exports.

### IMPORTING

 In Node.js, use the `require()` function to import modules.

- `const Menu = require('./menu.js');`  
`require()` is a JavaScript function that loads a module. It’s argument is the file path of the module: `./menu.js`.

We can also wrap any collection of data and functions in an object, and export the object using module.exports

```javascript
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  }
};
```

but as of `ES6`, JavaScript supports a new more readable and flexible syntax for exporting modules.

```javascript
let Menu = {};

export default Menu; // export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
```

```javascript
import Menu from './menu';
```

#### Named exports

```javascript
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };
```

```javascript
import { specialty, isVegetarian } from './menu';
console.log(specialty);
```

#### Export Named Exports

Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword `export` in front of variable declarations.

```javascript
export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};
```

##### Export as

```javascript
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```

```javascript
import { chefsSpecial, isVeg } from './menu';
```

note that we have an option to alias an object that was not previously aliased when exported. For example, the isLowSodium object that we exported could be aliased with the `as` keyword when imported:  

- `import {isLowSodium as saltFree} from 'Menu';`

Another way of using aliases is to import the entire module as an alias:

```javascript
import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();
```

#### Combining Export Statements

```javascript
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;  
```

## ERROR HANDLING

Error handling is the process of programmatically anticipating and addressing errors. In JavaScript, we handle errors using the keywords `try` and `catch`.

When we execute code and a line of code throws an error, that error is referred to as a `runtime error`.  
Examples of built-in runtime errors include:

- **ReferenceError**: when a variable or function cannot be found.
- **TypeError**: when a value is not a valid type, see the example below:

JavaScript errors are objects that have a `name` and `message` property.  
we could use the Error function to make our own error object with a message that is unique to our program!The Error function takes an argument of a string which becomes the value of the error’s message property. In the code snippet, we used the Error function to create an error object that has the message 'Your password is too weak.'.

### Creating an error

```javascript
console.log(Error('Your password is too weak.'));
or
console.log(new Error('Your password is too weak.'));
```

>Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.  
`throw Error('Something wrong happened');

### The try...catch Statement

```javascript
try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
```

We have code that follows `try` inside curly braces {} known as the **try block**.  
Inside the try block we insert code that we anticipate might throw an error.
Since we want to see what happens if an error is thrown in the try block, we throw an error with the message 'This error will get caught'.
Following the try block is the catch statement which accepts the thrown error from the try block . The `e` represents the thrown error.  
The curly braces that follow `catch(e)` is known as the catch block and contains code that executes to handle the error.  
Since the error is caught, our console.log() after the try...catch statement prints 'The thrown error that was caught in the try...catch statement!'.

## PROMISES

An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. `Asynchronous programming` means that time-consuming operations don’t have to bring everything else in our programs to a halt.

**`Promises` are objects that represent the eventual outcome of an asynchronous operation.**  
A Promise object can be in one of three states:

1. **Pending**: The initial state— the operation has not completed yet.
2. **Fulfilled**: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
3. **Rejected**: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
We refer to a promise as `settled` if it is no longer pending— it is either fulfilled or rejected.

### Constructing a Promise Object

```javascript
// The executor function generally starts an asynchronous operation and dictates how the promise should be settled.
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `resolve()` and `reject()` functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

**resolve** is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from `pending` to `fulfilled`, and the promise’s resolved value will be set to the argument passed into `resolve()`.
reject is a function that takes a reason or error as an argument.  
Under the hood, if invoked, **reject()** will change the promise’s status from `pending` to `rejected`, and the promise’s rejection reason will be set to the argument passed into `reject()`.

### The Node `setTimeout()` Function

we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using `setTimeout()`.

>**setTimeout()** is a Node API (a comparable API is provided by web browsers)   that uses callback functions to schedule tasks to be performed after a delay.  
**setTimeout()** has two parameters: a callback function and a delay in milliseconds.

```javascript
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);
```

#### **But why is it “at least” two seconds and not exactly two seconds?**

>This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. `Asynchronous JavaScript` uses something called the `event-loop`. After two seconds, `delayedHello()` is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before `delayedHello()` is actually executed.

```javascript
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();
```

### Consuming Promises

Promise objects come with an aptly named `.then()` method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”
.then() is a `higher-order function`— it takes two callback functions as arguments. We refer to these callbacks as `handlers`. When the promise settles, the appropriate handler will be invoked with that settled value.  

- The first handler, sometimes called `onFulfilled`, is a `success handler`, and it should contain the logic for the promise resolving.  
- The second handler, sometimes called `onRejected`, is a `failure handler`, and it should contain the logic for the promise rejecting.  

We can invoke `.then()` with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. One important feature of `.then()` is that it always returns a promise.  

```javascript
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
```

### SOC with `catch()`

Remember, `.then()` will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.

```javascript
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
```

Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: `.catch()`.
The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection

```javascript
prom
.then((resolvedValue) => {
  console.log(resolvedValue);
})
.catch((rejectionReason) => {
  console.log(rejectionReason);
});
```

This process of chaining promises together is called composition.  

```javascript
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```

### Common Mistakes

#### Mistake 1: Nesting promises instead of chaining them

```javascript
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
```

#### Mistake 2: Forgetting to return a promise

```javascript
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal) // no return statement
})
.then((someVal) => {
  console.log(someVal);
})
```

We invoke a second `.then()`. It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!

### Using `Promise.all()`

**To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function `Promise.all()`.**  
Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as `failing fast`.

```javascript
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

#### IMP Points

- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
- Promises can be in one of three states: pending, resolved, or rejected.
A promise is settled if it is either resolved or rejected.
- We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
- setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
- We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
- We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
- To use promise composition correctly, we have to remember to return promises constructed within a .then().
- We should chain multiple promises rather than nesting them.
- To take advantage of concurrency, we can use Promise.all().

```javascript
const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });

const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);

const promise2 = examplePromise2.then(onFulfill).catch(onReject);
//output same
```

## ASYNC - AWAIT

JavaScript is `non-blocking`: instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.
The `async` keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.

```javascript
async function myFunc() {
  // Function body here
};

myFunc();
```

but we can also create async function expressions:

```javascript
const myFunc = async () => {
  // Function body here
};
```

async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch with our async functions. An async function will return in one of three ways:

- If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.
- If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
- If a promise is returned from the function, it will simply return that promise

```javascript
async function fivePromise() {
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5
```

The `await` keyword can only be used inside an async function. `await` is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.  
We can await the resolution of the promise it returns inside an async function

```javascript
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!
```

### Miss writing await

In the first async function, `noAwait()`, we left off the await keyword before myPromise(). In the second, yesAwait(), we included it. The noAwait() function logs `Promise { <pending> }` to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.

```javascript
async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
myFunc();
```

Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual `.then()` functions and avoid halting our execution with await.

### Await Promise.all()

Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a `Promise.all()`.
Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently. Promise.all() also has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

```javascript
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]);
  }
}
```

### Handling Dependent Promises / Chaining

Though using the `async...await` syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the async...await version more closely resembles synchronous code, which helps developers maintain and debug their code.  
The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax.

#### Normal promise syntax

```javascript
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}
```

#### Async version

```javascript
async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}
```

### Handling Errors

With async...await, we use try...catch statements for error handling. By using this syntax, not only are we able to handle errors in the same way we do with synchronous code, but we can also catch both synchronous and asynchronous errors. This makes for easier debugging!

```javascript
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
usingTryCatch();
```

we can still use native promise’s .catch() with an async function

```javascript
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
  console.log(rejectValue);
})
```

### Handling Independent Promises

Remember that await halts the execution of our async function. This allows us to conveniently write synchronous-style code to handle dependent promises. But what if our async function contains multiple promises which are not dependent on the results of one another to execute?
In the `waiting()` function, we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.
In our `concurrent()` function, both promises are constructed without using await. We then await each of their resolutions to print them to the console.

```javascript
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
// With our concurrent() function both promises’ asynchronous operations can be run simultaneously.
```

#### Main Points

- `async...await` is syntactic sugar built on native JavaScript promises and generators.
- We declare an async function with the keyword `async`.
- Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
- await returns the resolved value of the awaited promise.
- We can write multiple await statements to produce code that reads like synchronous code.
- We use try...catch statements within our async functions for error handling.
- We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.

## HTTP Requests

One of JavaScript’s greatest assets is its non-blocking properties, or that it is an asynchronous language.  
JavaScript uses an `event loop` to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.
Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events.  

### XHR GET Requests I

`Asynchronous JavaScript and XML (AJAX)`, enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.  
`XMLHttpRequest (XHR)` API, named for XML, can be used to make many kinds of requests and supports other forms of data.

`XHR GET request`. an AJAX GET request using an XMLHttpRequest object

```javascript
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
    //Code to execute with response
  }
};

xhr.open('GET',url);
xhr.send();
```

### XHR GET Requests IV

- A query string contains additional information to be sent with a request.
- A query string is separated from the URL using a `?` character. After ?, you can then create a parameter which is a key value pair joined by a =.
`https://api.datamuse.com/words?key=value`  

If you want to add an additional parameter you will have to use the & character to separate your parameters. Like so:

- `https://api.datamuse.com/words?key=value&anotherKey=anotherValue`

### XHR POST Requests I. AJAX POST request

```javascript
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({ "id": "200"}); //JSON.stringify() will convert a value to a JSON string.

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
    //Code to execute with response
  }
};

xhr.open('POST',url);
xhr.send(data);
```

### fetch() GET Requests I

#### The fetch() function

- Creates a request object that contains relevant information that an API needs.
- Sends that request object to the API endpoint provided.
- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

```javascript
fetch('https://api-to-call.com/endpoint')    //sends Request
  .then((response) => {                      //Converts response object into JSON
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    //Code to execute                        //handle success
  });
```

### fetch() POST Requests I

```javascript
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({ "id" : "200"})
})
.then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => {
  //Code to execute                        //handle success
});
```

### async GET Requests I

```javascript
async function name() {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      //Code to execute
    }
    throw new Error('Request failed');

  } catch (e) {
    console.log(e.message);
  }
}
```

### async POST Requests I

```javascript
async function name() {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',                                            //Sends Request
      body: JSON.stringify({'id': '200'})
    });
    if (response.ok) {
      const jsonResponse = await response.json();               //Success handler
      //Code to execute
    }
    throw new Error('Request failed');

  } catch (e) {
    console.log(e.message);                                      //Error handler
  }
}
```

### Review Requests

- `GET` and `POST` requests can be created a variety of ways
- Use `AJAX` to asynchronously request data from APIs. `fetch()` and `async/await` are new functionalities developed in `ES6` (promises) and ES8 respectively.
- `Promises` are a new type of JavaScript object that represent data that will eventually be returned from a request.
- `fetch()` is a web API that can be used to create requests. fetch() will return promises.
- We can chain `.then()` methods to handle promises returned by fetch().
- The `.json()` method converts a returned promise to a JSON object.
- async is a keyword that is used to create functions that will return promises.

>Some messages include:  
`PO_RB`: 05a06d569a41479fa012e71078a7c84d  
`WL_FS`: SIJAJ4HNCJWTIOYWNGVPVDIETR3VKVEELDDCJQNAWMH2SZDM, NJC2WB5RKJ5VKZ5JE0LQZ2LV2Y4ZMSMVSPRQ0NWWGLO353OT  
`WL_OW`: 07965a4b5e3e12a191274b42895b494c  
`R_Y`: WI2EC2SuzrtxtyFMbXPPJQ, xcy84JxMyFVkCdSZge4XghfYzNMXleFwg7y5nVnb8lAlSeY88AWDK--UxMSe4bLfc93MX192gsjOmgc57JR12wNC9oGsDSK1E71j6Wl95qHVzaA8iofLIus5D_aiXnYx  
`J_S`: 65ead4c4b861435a9fe892bbce377b70, 3f5a772577214531bca88d45a629dfde  
`SSP_G`:

- `await` is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.
- `await` can only be used within functions declared with async.

## JSON

- JSON stands for `JavaScript Object Notation`.
- The filename extension is `.json`.
- JSON Internet Media type is `application/json`.

### Uses of JSON

- It is used while writing JavaScript based applications that includes browser extensions and websites.
- JSON format is used for serializing and transmitting structured data over network connection.
- **It is primarily used to transmit data between a server and web applications.
Web services and APIs use JSON format to provide public data.**

Simple Extension:

```json
{
   "book": [
      {
         "id":"01",
         "language": "Java",
         "edition": "third",
         "author": "Herbert Schildt"
      },

      {
         "id":"07",
         "language": "C++",
         "edition": "second",
         "author": "E.Balagurusamy"
      }
   ]
}
```

### JavaScript syntax includes the following

- Data is represented in name/value pairs.
- Curly braces hold `objects` and each name is followed by ':'(colon), the name/value pairs are separated by , (comma).
- Square brackets hold `arrays` and values are separated by ,(comma).

### Data Types

- `Number` double- precision floating-point format in JavaScript
- `String` double-quoted Unicode with backslash escaping
- `Boolean` true or false
- `Array` an ordered sequence of values
- Value it can be a string, a number, true or false, null etc
- `Object` an unordered collection of key:value pairs
- Whitespace can be used between any pair of tokens
- `null` empty