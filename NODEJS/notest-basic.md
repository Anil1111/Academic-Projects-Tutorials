# NodeJS

`Node.js`, invented by Ryan Dahl in 2009  
Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.  
Though Node was created with the goal of building web servers and web applications in JavaScript, it can also be used for creating command-line applications or desktop applications.  
For more advanced development, Node can be combined with any number of robust frameworks like the Express.js framework for creating effective web application back-ends.

## NODE cd

`REPL` is an abbreviation for read–eval–print loop.

It’s a program that loops, or repeatedly cycles, through three different states: a `read state` where the program reads input from a user, the `eval state` where the program evaluates the user’s input, and the `print state` where the program prints out its evaluation to a console. Then it loops through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A `>` character will show up in the terminal indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.

By default, you indicate the input is ready for eval when you hit enter. If you’d like to type multiple lines and then have them evaluated at once you can type .editor while in the REPL. Once in “editor” mode, you can type CONTROLD when you’re ready for the input to be evaluated.  
Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.  
The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. Every Node-specific global property sits inside the the Node global object. This object contains a number of useful properties and methods that are available anywhere in the Node environment.

### Access the global object

You can `console.log(global)` or just type global
Check out an easier to read list of the properties on the global object with `Object.keys(global)`
Add a property to the global object, eg. global.cat = 'meow!'.

## Running a Program with Node

Node was designed with server-side web development in mind and has a lot of thoughtful functionality towards that end. At its most simple, however, it provides the ability to run JavaScript programs on our own computers instead of just in the browser’s console or embedded in HTML.

### Accessing the Process Object

In computer science, a process is the instance of a computer program that is being executed.
Node has a global process object with useful methods and information about the current process.

The `process.env` property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located.
a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key `NODE_ENV` and a value of either production or development.

```javascript
if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
```

The `process.memoryUsage()` returns information on the CPU demands of the current process. It returns a property that looks similar to this:

```javascript
{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }
```

`Heap` can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to the a block of computer memory. `process.memoryUsage().heapUsed` will return a number representing how many bytes of memory the current process is using.

The `process.argv` property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

```javascript
node myProgram.js testing several features
console.log(process.argv[3]); // Prints 'several'
```

### Core Modules and Local Modules

`Modularity` is a software design technique where one program has distinct parts each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files and combined through requiring them where needed using the require() function.
Node has several modules included within the environment to efficiently perform common tasks. These are known as the core modules. The core modules are defined within Node.js’s source and are located in the lib/ folder. Core modules are required by passing a string with the name of the module into the require() function:

#### Require in the 'events' core module

`let events = require('events');`

The require() function will first check to see if its argument is a core module, if not, it will move on to different attempts to locate it.

```javascript
module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }
  praise() {
    return `Good dog, ${this.name}!`;
  }
};  
```

#### In app.js

Each JavaScript file in the Node environment has a special JavaScript object called module.exports. It holds everything in that file, or module, that’s available to be required into a different file.

```javscript
let Dog = require('./dog.js');
const tadpole = new Dog('Tadpole');
console.log(tadpole.praise());
```

## Event-Driven Architecture

Node is often described as having event-driven architecture.
Node provides an EventEmitter class which we can access by requiring in the events core module:  

- Require in the 'events' core module  
`let events = require('events');`

- Create an instance of the EventEmitter class  
`let myEmitter = new events.EventEmitter();`

Each event emitter instance has an `.on()` method which assigns a listener callback function to a named event. The .on() method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.  
Each event emitter instance also has an `.emit()` method which announces a named event has occurred. The .emit() method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.  

```javascript
let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};

// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'
```

## Asynchronous JavaScript with Node.js

In server-side development, we often perform time-consuming tasks such as reading files or querying a database. Instead of halting the execution of our code to await these operations or using multiple threads like other back end environments, Node was designed to use an event loop like the one used in browser-based JavaScript execution. The event-loop enables asynchronous actions to be handled in a non-blocking way.  
Node provides a number of APIs for performing asynchronous tasks which expect callback functions to be passed in as arguments. Under the hood, these APIs trigger the subscription to and emitting of events to signal the completion of the operation. When the operation completes, the callback function is added to a queue, or line, of tasks waiting for their turn to be executed. When the current stack, or list, or synchronous tasks finish executing, the operations on the queue will be performed.  

This means if synchronous tasks never end, operations waiting in the event-queue would never have the chance to run. Take a look at the following example code using the asynchronous Node `setTimeout()` API which asynchronously executes a provided callback function after a given delay:  

```javascipt
let keepGoing = true;

let callback = () => {
  keepGoing = false;
};

setTimeout(callback, 1000); // Run callback after 1000ms

while(keepGoing === true) {
  console.log(`This is the song that never ends. Yes, it just goes on and on my friends. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...`)
};
```

This `while-loop` will continue forever! Even though the callback changing the keepGoing variable to false is added to the event queue after 1 second, it will never have a chance to run— the synchronous code from the loop will always fill the stack!

## User Input/Output

When we use console.log() we prompt the computer to output information to the console. In the Node environment, the console is the terminal, and the console.`log()` method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

In Node, we can also receive input from a user through the terminal using the `stdin.on()` method on the process object:

```javascript
process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
```

Here, we were able to use `.on()` because under the hood `process.stdin` is an instance of EventEmitter. When a user enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will be invoked. The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before printing.

## Errors

The Node environment has all the standard JavaScript errors such as `EvalError, SyntaxError, RangeError, ReferenceError, TypeError, and URIError` as well as the JavaScript Error class for creating new error instances. Within our own code, we can generate errors and throw them, and, with synchronous code in Node, we can use error handling techniques such as `try...catch` statements.

Many asynchronous Node APIs use error-first `callback functions`: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.

```javascript
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}
```

## Filesystem

All of the data on a computer is organized and accessed through a filesystem. When running JavaScript code on a browser, it’s important for a script to have only limited access to a user’s filesystem. This technique of isolating some applications from others is known as sandboxing. Sandboxing protects users from malicious programs and invasions of privacy.

In the back-end, however, less restricted interaction with the filesystem is essential. The Node fs core module is an API for interacting with the file system. It was modeled after the `POSIX` standard for interacting with the filesystem.

Each method available through the fs module has a synchronous version and an asynchronous version. One method available on the fs core module is the `.readFile()` method which reads data from a provided file:
The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.

```javascript
const fs = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);
```

## Readable Streams

In more realistic scenarios, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream. Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.
One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the `.createInterface()` method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:

```javascript
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
```

## Writable Streams

We can create a writeable stream to a file using the `fs.createWriteStream()` method:
Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.

```javascript
const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();
```

## Create an HTTP Server

A Node core module designed to meet these needs is the http module. This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

The `http.createServer()` method returns an instance of an http.server. An http.server has a method `.listen()` which causes the server to “listen” for incoming connections. When we run `http.createServer()` we pass in a custom callback function (often referred to as the requestListener). This callback function will be triggered once the server is listening and receives a request.

Let’s break down how the requestListener callback function works:
The function expects two arguments: a request object and a response object.
Each time a request to the server is made, Node will invoke the provided requestListener callback function, passing in the request and response objects of the incoming request.  
Request and response objects come with a number of properties and methods of their own, and within the requestListener function, we can access information about the request via the request object passed in.  
The requestListener is responsible for setting the response header and body.
The requestListener must signal that the interaction is complete by calling the `response.end()` method.

```javascript
const http = require('http');

let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};

const server = http.createServer(requestListener);
server.listen(3000);
```

You could run the above code on your local machine, and access it by visiting `http://localhost:3000/` from your browser. “localhost” is used to refer to the same computer that’s running the current Node process.

---

## Web Server

A web server is a process running on a computer that listens for incoming requests for information over the internet and sends back responses. Each time a user navigates to a website on their browser, the browser makes a request to the web server of that website.

### Protocol

The specific format of a request (and the resulting response) is called the protocol. You might be familiar with the protocol used to access websites: HTTP.

For the simplest websites, a client makes a single request. The web server receives that request and sends the client a response containing everything needed to view the website. This is called a static website
Moreover, modern web applications often cater to the specific user rather than sending the same files to every visitor of a webpage. This is known as dynamic content.  

The collection of programming logic required to deliver dynamic content to a client, manage security, process payments, and myriad other tasks is sometimes known as the “application” or application server.  
The application server can be responsible for anything from sending an email confirmation after a purchase to running the complicated algorithms a search engine uses to give us meaningful results.  

## DB

The back-ends of modern web applications include some sort of database, often more than one. Databases are collections of information. There are many different databases, but we can divide them into two types: relational databases and non-relational databases (also known as NoSQL databases). Whereas relational databases store information in tables with columns and rows, non-relational databases might use other systems such as key-value pairs or a document storage model. SQL, Structured Query Language, is a programming language for accessing and changing data stored in relational databases. Popular relational databases include MySQL and PostgreSQL while popular NoSQL databases include MongoDB and Redis.

## API

In order to have consistent ways of interacting with data, a back-end will often include a web API. API stands for Application Program Interface and can mean a lot of different things, but a web API is a collection of predefined ways of, or rules for, interacting with a web application’s data, often through an HTTP request-response cycle.  
this type of request indicates how it would like to interact with a web application’s data (create new data, read existing data, update existing data, or delete existing data), and it receives some data back as a response.

### Authorization and Authentication

Authentication is the process of validating the identity of a user. One technique for authentication is to use logins with usernames and passwords. These credentials need to be securely stored in the back-end on a database and checked upon each visit.  
Authorization controls which users have access to which resources and actions. Certain application views, like the page to edit a social media personal profile, are only accessible to that user. Other activities, like deleting a post, are often similarly restricted.  
When building a robust web application back-end, we need to incorporate both authentication (Who is this user? Are they who they claim to be?) and authorization (Who is allowed to do and see what?) into our server-side logic to make sure we’re creating secure, personalized, and dynamic content.

---

## LEARN EXPRESS ROUTES

### Starting A Server

```javascript
const express = require('express');
const app = express();
```

On the first line, we import the Express library with require. When invoked on the second line, it returns an instance of an Express application. This application can then be used to start a server and specify server behavior.
The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request, and then return a response. In order for our server to start responding, we have to tell the server where to listen for new requests by providing a port number argument to a method called `app.listen()`
The second argument is a callback function that will be called once the server is running and ready to receive responses.

```javascript
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
```

### Writing Your First Route

To tell our server how to deal with any given request, we register a series of routes. Routes define the control flow for requests based on the request’s path and HTTP verb.For example, if your server receives a GET request at `‘/monsters’`, we will use a route to define the appropriate functionality for that HTTP verb (GET) and path (/monsters).
The HTTP verb is always included in the request, and it is one of a finite number of options used to specify expected functionality. GET requests are used for retrieving resources from a server

Express uses `app.get()` to register routes to match GET requests. Express routes (including app.get()) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.

```javascript
const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
app.get('/moods', (req, res, next) => {
  // Here we would send back the moods array in response
});
```

The route above will match any GET request to `'/moods'` and call the callback function, passing in two objects as the first two arguments. These objects represent the request sent to the server and the response that the Express server should eventually send to the client.
If no routes are matched on a client request, the Express server will handle sending a 404 Not Found response to the client.

```javascript
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Open a call to `app.get()` below:
app.get('/expressions', (req, res, next) => {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

### Sending A Response

HTTP follows a one request-one response cycle. Each client expects exactly one response per request, and each server should only send a single response back to the client per request.
Express servers send responses using the `.send()` method on the response object. .send() will take any input and include it in the response body.
In addition to .send(), .json() can be used to explicitly send JSON-formatted responses. .json() sends any JavaScript object passed into it.

```javascript
const monsters = [{ type: 'werewolf' }, { type: 'hydra' }, { type: 'chupacabra' }];
app.get('/monsters', (req, res, next) => {
  res.send(monsters);
});
```

### Matching Route Paths

Express tries to match requests by route, meaning that if we send a request to `<server address>:<port number>/api-endpoint`, the Express server will search through any registered routes in order and try to match `/api-endpoint`.

Express searches through routes in the order that they are registered in your code. The first one that is matched will be used, and its callback will be called.

### Getting A Single Expression

`Routes` become much more powerful when they can be used dynamically. Express servers provide this functionality with named route parameters. Parameters are route path segments that begin with : in their Express route definitions. They act as wildcards, matching any text at that path segment. For example `/monsters/:id` will match `both/monsters/1` and `/monsters/45`.  
Express parses any parameters, extracts their actual values, and attaches them as an object to the request object: `req.params`. This object’s keys are any parameter names in the route, and each key’s value is the actual value of that field per request.
*The req.params value is always a string for numbers also, and therefore Number(`<onNumPassed>`) needs to be done!

```javascript
const monsters = { hydra: { height: 3, age: 4 }, dragon: { height: 200, age: 350 } };
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params) // { name: 'hydra' };
  res.send(monsters[req.params.name]);
});
```

### Setting Status Codes

Express allows us to set the status code on responses before they are sent. Response codes provide information to clients about how their requests were handled.
any `res.send()` has by default sent a `200 OK` status code.
The res object has a .status() method to allow us to set the status code, and other methods like .send() can be chained from it.

```javascript
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };

app.get('/monsters-inventory/:name', (req, res, next) => {
  const monsterInventory = monsterStoreInventory[req.params.name];
  if (monsterInventory) {
    res.send(monsterInventory);
  } else {
    res.status(404).send('Monster not found');
  }
});
```

### Matching Longer Paths

Route parameters will match anything in their specific part of the path, so a route matching `/monsters/:name` would match all the following request paths

- `/monsters/hydra`
- `/monsters/jörmungandr`
- `/monsters/manticore`
- `/monsters/123`  
but wont match => /monsters/

### Other HTTP Methods

This course will cover three other important HTTP methods: `PUT`, `POST`, and `DELETE`. Express provides methods for each one: app.put(), app.post(), and app.delete().  
`PUT` requests are used for updating existing resources. In our Express Yourself machine, a PUT request will be used to update the name or emoji of an expression already saved in our database.

### Using Queries

Query strings appear at the end of the path in URLs, and they are indicated with a ? character. For instance, in `/monsters/1?name=chimera&age=1`, the query string is `name=chimera&age=1` and the path is `/monsters/1/`
Query strings do not count as part of the route path. Instead, the Express server parses them into a JavaScript object and attaches it to the request body as the value of req.query. The key: value relationship is indicated by the = character in a query string, and key-value pairs are separated by &. In the above example route, the req.query object would be `{ name: 'chimera', age: '1' }`.

```javascript
const monsters = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  monsters[req.params.id] = monsterUpdates;
  res.send(monsters[req.params.id]);
});
```

### Creating An Expression

`POST` is the HTTP method verb used for creating new resources. Because POST routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created.  
For example, to create a new monster, a client would make a POST request to `/monsters`. The client does not know the id of the monster until it is created and sent back by the server, therefore POST `/monsters/:id` doesn’t make sense
Express uses .post() as its method for POST requests.  
The HTTP status code for a newly-created resource is `201 Created`.

### Deleting Old Expressions

`DELETE` is the HTTP method verb used to delete resources. Because DELETE routes delete currently existing data, their paths should usually end with a route parameter to indicate which resource to delete.  
Express uses `.delete()` as its method for DELETE requests.  
Servers often send a 204 No Content status code if deletion occurs without error.

## Express.Router

An Express router provides a subset of Express methods. To create an instance of one, we invoke the `.Router()` method on the top-level Express import.
To use a router, we mount it at a certain path using app.use() and pass in the router as the second argument.

```javascript
const express = require('express');
const app = express();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    Name: 'manticore',
    age: 21
  }
}

const monstersRouter = express.Router();
app.use('/monsters', monstersRouter);

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  If (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
```

### Using Multiple Router Files

Generally, we will keep each router in its own file, and require them in the main application. This allows us to keep our code clean and our files short.

```javascript
crete monster.js file
module.exports = monstersRouter;
```

To use this router in another file, we use module.exports so that other files can access monstersRouter. The only other new line of code required is that Express must be required in each file, since we’ll need to create a router with `express.Router()`.

Our `main.js` file could then be refactored to import the monstersRouter:

```javascript
const express = require('express');
const app = express();
const monstersRouter = require('./monsters.js');
app.use('/monsters', monstersRouter);
```

## Middleware

Naming variables consistently so that they’re identifiable is one way to improve the readability of a codebase. Another pillar of code quality is avoiding duplication of code within a codebase.Code duplication is an invitation for bugs. If incorrect code is copy-and-pasted in multiple places, a developer might remedy the flaws in only a few of those places and fail to fix the buggy code everywhere.  

### DRYing Code With Functions

Code that performs the same task in multiple places is repetitive, and the quality coder’s credo is “Don’t Repeat Yourself” (DRY). If a program performs similar tasks without refactoring into a function, it is said to “violate DRY”.

### DRYing Routes With app.use()

We write something called middleware. Middleware is code that executes between a server receiving a request and sending a response. It operates on the boundary, so to speak, between those two HTTP actions.  
In Express, `middleware` is a function. Middleware can perform logic on the request and response objects, such as: inspecting a request, performing some logic based on the request, attaching information to the response, attaching a status to the response, sending the response back to the user, or simply passing the request and response to another middleware.

```javascript
app.use((req, res, next) => {
  console.log('Request received');
});
```

`app.use()` takes a callback function that it will call for every received request. In this example, every time the server receives a request, it will find the first registered middleware function and call it. In this case, the server will find the callback function specified above, call it, and print out 'Request received'.  
An Express application is essentially a series of middleware function calls.
In addition to performing the routing that allows us to communicate appropriate data for each separate endpoint, we can perform application logic we need by implementing the necessary middleware.

### next()

The middleware stack is processed in the order they appear in the application file, such that middleware defined later happens after middleware defined before. It’s important to note that this is regardless of method — an app.use() that occurs after an app.get() will get called after the app.get()

```javascript
app.use((req, res, next) => {
  console.log("A sorcerer approaches!");
  next();
});

app.get('/magic/:spellname', (req, res, next) => {
  console.log("The sorcerer is casting a spell!");
  next();
});

app.get('/magic/:spellname', (req, res, next) => {
  console.log(`The sorcerer has cast ${req.params.spellname}`);
  res.status(200).send();
});

app.get('/magic/:spellname', (req, res, next) => {
  console.log("The sorcerer is leaving!");
});
```

Accessing `http://localhost:4001/magic/fireball`

Console Output:

```output
"A sorcerer approaches!"
"The sorcerer is casting a spell!"
"The sorcerer has cast fireball"
```

In the above code, the routes are called in the order that they appear in the file, provided the previous route called `next()` and thus passed control to the next middleware. We can see that the final matching call was not printed. This is because the previous middleware did not invoke the next() function to run the following middleware.
An Express middleware is a function with three parameters: (req, res, next). The sequence is expressed by a set of callback functions invoked progressively after each middleware performs its purpose. The third argument to a middleware function, next, should get explicitly called as the last part of the middleware’s body. This will hand off the processing of the request and the construction of the response to the next middleware in the stack.

### Request And Response Parameters

`Express` routes are middleware. Every route created in Express is also a middleware function handling the request and response objects at that part of the stack. Express routes also have the option of sending a response body and status code and closing the connection.

Route-Level `app.use()` - Single Path
This is the app.use() function signature:
`app.use([path,] callback [, callback...])`

In documentation for many programming languages, optional arguments for functions are placed in square brackets ([]). This means that app.use() takes an optional path parameter as its first argument. We can now write middleware that will run for every request at a specific path.

```javascript
app.use('/sorcerer', (req, res, next) => {
  console.log('User has hit endpoint /sorcerer');
  next();
});
```

In the example above the console will print 'User has hit endpoint `/sorcerer`', if someone visits our web page’s ‘/sorcerer’ endpoint. Since the method `app.use()` was used, it won’t matter if the user is performing a GET,a POST, or any other kind of HTTP request. Since the path was given as an argument to app.use(), this middleware function will not execute if the user hits a different path (for instance: '/spells' or '/sorcerer/:sorcerer_id').

### Control Flow With next()

For example, when designing a system with confidential information, we want to be able to selectively show that information to authorized users. In order to do that, we would create middleware that tests a user’s permissions. If the user has the permission necessary, we would continue through the middleware stack by calling `next()`. If it fails, we would want to let the user know that they’re not allowed to see the information they’re trying to access.

Route-Level `app.use()` - Multiple Paths
Express documentation for app.use():

“argument: path  
description: The path for which the middleware function is invoked; can be any of:  
A string representing a path.  
A path pattern.  
A regular expression pattern to match paths.  
An array of combinations of any of the above. “

## Middleware Stacks

There is nothing stopping us from defining functions and using them as middleware though. That is to say:

```javascript
const logging = (req, res, next) => {
  console.log(req);
  next();
};

app.use(logging);
```

It is also modifiable so that you can remove the `app.use()` line and replace it with a specific route method, or sprinkle it throughout the application without it being universal.
it is useful to know that methods such as `app.use(), app.get(), app.post()`, and so on all can take multiple callbacks as additional parameters. This results in code that looks like the following:

```javascript
const validateData = (req, res, next) => {
  ...
};
const getSpell = (req, res, next) => {
  res.status(200).send(getSpellById(req.params.id));
};
const createSpell = (req, res, next) => {
  createSpellFromRequest(req);
  res.status(201).send();
};
const updateSpell = (req, res, next) => {
  updateSpellFromRequest(req);
  res.status(204).send();
}

app.get('/spells/:id', authenticate, getSpell);
app.post('/spells', authenticate, validateData, createSpell);
app.put('/spells/:id', authenticate, validateData, updateSpell);
```

In the above code sample, we created reusable middleware for authentication and data validation. We use the `authenticate()` middleware to verify a user is logged in before proceeding with the request and we use the validateData() middleware before performing the appropriate create or update function.

### Open-Source Middleware: Logging

Express already exists as an open-source package that we can install and use to build upon. There is a huge ecosystem of Javascript packages that will solve so many of the problems that developers frequently run into.
Time spent thinking about and writing code that accomplishes common tasks is time that could be better spent on thinking about and writing code that is unique to your application.

### Morgan

We will replace the logging code in the workspace with morgan, an open-source library for logging information about the HTTP request-response cycle in a server application. `morgan()` is a function that will return a middleware function, to reiterate: the return value of morgan() will be a function, that function will have the function signature (req, res, next) that can be inserted into an app.use(), and that function will be called before all following middleware functions. Morgan takes an argument to describe the formatting of the logging output. For example, morgan('tiny') will return a middleware function that does a “tiny” amount of logging. With morgan in place, we’ll be able to remove the existing logging code. Once we see how fast it is to add logging with morgan, we won’t have to spend time in the future trying to figure out how to replicate that functionality.

### Documentation

The best open-source packages have extremely well written documentation. Documentation is a resource, presented by the package’s author(s), that includes information about what software is, what it does, and how to use it. We’ve seen the Express documentation in this course, and now we’re going to look at the morgan documentation.

### Open-Source Middleware: Body Parsing

When we implement middleware, we take in the req object, so that we can see information about the request. This object includes a good deal of important information about the request that we can use to inform our response, however for some requests it misses a fundamental piece. An HTTP request can include a body, a set of information to be transmitted to the server for processing. This is useful when the end user needs to send information to the server. If you’ve ever uploaded a post onto a social media website or filled out a registration form chances are you’ve sent an HTTP request with a body. The lucky thing about using open-source middleware is that even though parsing the body of an HTTP request is a tricky operation requiring knowledge about network data transfer concepts, we easily manage it by importing a library to do it for us.

### Error-Handling Middleware

Error handling middleware needs to be the last app.use() in your file. If an error happens in any of our routes, we want to make sure it gets passed to our error handler. The middleware stack progresses through routes as they are presented in a file, therefore the error handler should sit at the bottom of the file.
The biggest difference is that there is an additional parameter in our callback function, err. This represents the error object, and we can use it to investigate the error and perform different tasks depending on what kind of error was thrown

```javascript
app.use((req, res, next) => {
  const newValue = possiblyProblematicOperation();
  if (newValue === undefined) {
    let undefinedError = new Error('newValue was not defined!');
    return next(undefinedError);
  }
  next();
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});
```

check to see if this function returned anything at all. If it didn’t, we create a new Error and pass it to next().

## ROUTER PARAMETERS

When building interfaces with Express, we will run into the pattern of expecting certain information in a requested URL and using that information to identify the data that is being requested. To give an example:

```javascript
app.get('/sorcerers/:sorcererName', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  res.send(sorcerer.info);
});

app.get('/sorcerers/:sorcererName/spellhistory', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  const spellHistory = Spells[sorcerer.id].history;
  res.send(spellHistory);
});
```

### router.param()

When a specific parameter is present in a route, we can write a function that will perform the necessary lookup and attach it to the req object in subsequent middleware that is run.

```javascript
app.param('spellId', (req, res, next, id) => {
  let spellId = Number(id);
    try {
      const found = SpellBook.find((spell) => {
        return spellId === spell.id;
      })
      if (found) {
        req.spell = found;
        next();
      } else {
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {
      next(err)
    }
});
```

In the code above we intercept any request to a route handler with the :spellId parameter. Note that in the app.param function signature, 'spellId' does not have the leading :. The actual ID will be passed in as the fourth argument, id in this case, to the app.param callback function when a request arrives.

## Merge Parameters

When we’re building web endpoints, we might want to access some property of a complex object. In order to do this in Express, we can design a nested router. This would be a router that is invoked within another router. In order to pass parameters the parent router has access to, we pass a special configuration object when defining the router.

```javascript
const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});

sorcererRouter.use('/:sorcererId/familiars', familiarRouter);

sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});

sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);
  req.sorcerer = sorcerer;
  next();
});

familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});

app.use('/sorcerer', sorcererRouter);
```

In the code above we define two endpoints: `/sorcerer` and `/sorcerer/:sorcererId/familiars`. The familiars are nested into the sorcerer endpoint — indicating the relationship that a sorcerer has multiple familiars. Take careful note of the {mergeParameters: true} argument that gets passed when creating the familiarRouter. This argument tells Express that the familiarRouter should have access to parents passed into its parent router, that is, the sorcererRouter.
We then tell express that the path for the familiarRouter is the same as the path for the sorcererRouter with the additional path /:sorcererId/familiars. We then can create a family of routes (a router) built by appending routes to familiarRouter‘s base: `/sorcerer/:sorcererId/familiars`.