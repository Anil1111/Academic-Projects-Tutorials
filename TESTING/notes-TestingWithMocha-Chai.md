# Unit Testing with Mocha and Chai

## Why write tests for code?
Tests are common in software engineering because they help to document the core functionality of the code and make sure that new features do not introduce breaking changes.
In the software industry, code is generally written, maintained, and refactored by many different software engineers over many years. Having comprehensive tests enables engineers to confidently change or add to existing code knowing that their changes haven’t broken other features or had unintended side effects elsewhere in the app.

## What is Unit Testing?
Unit testing means testing the behavior of code in small, independent units. Units are typically designed to be the smallest meaningful chunk of independently testable code. This is in comparison of integration testing, in which a set of modules are tested as a group.

## Mocha and Chai, Test Suites and Test Cases
`Mocha` and `Chai` are two JavaScript frameworks commonly used together for unit testing.

### Mocha 
Is a testing framework that provides functions that are executed according in a specific order, and that logs their results to the terminal window.
When you read tests written in Mocha, you’ll see regular use of the keywords `describe` and `it`. These keywords, provided by Mocha, provide structure to the tests by batching them into test suites and test cases.   
A `test suite` is a collection of tests all relating to a single functionality or behavior. A `test case` or a `unit test` is a single description about the desired behavior of the code that either passes or fails. Test suites are batched underneath the describe keyword, and test cases are batched under the it keyword.   
Additionally, `Mocha` provides tools for cleaning the state of the software being tested in order to insure that test cases are being run independently of each other. You might end up using other tools, to stub or mock the desired behaviors of other units that a given unit of code might interact with. The independence of test cases is a key principle of unit testing, as it allows the cause of errors to be pinpointed more specifically if a test case fails, thereby speeding up the debugging process.

### Assertions
The base component of test cases are `assertions`. Assertions are tied to particular values (whereas test cases are descriptions of behavior) and they will fail if the expected value does not match the actual value.
Every assertion in a test case must be met in order for the test case to pass.

### Chai
Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. Chai provides clean syntax that almost reads like English!
Example of a Chai assertion: 
```javascript
expect(exampleArray).to.have.lengthOf(3);
```
This code will check whether that the variable exampleArray has a length of three or not.

### Failing and Passing Tests
Robust tests are accurate for both failing and passing conditions! When writing tests, you need to make sure that the test fails if the feature that it is testing was not implemented properly, as well as making sure that the test passes if it is. Tests that will erroneously pass can be enormously misleading, and might lead to broken code getting merged and deployed.


## Reading Tests with Mocha and Chai

```javascript
describe('setPlayerMoves() - Main Functionality', function() { // this is a `describe` block, everything within this callback function is one test suite
  afterEach(clearMoves); // this is a `hook` that gets called between `it` blocks to reset the state

  it('a function called setPlayerMoves should exist', function() { // this is an `it` block, everything inside this function is a single test case
    should.equal(typeof setPlayerMoves, 'function'); // tests often start by checking that the right things exist and are of the right type
  });

  it('should set player one\'s moves with valid inputs', function() {
    setPlayerMoves('Player One', 'rock', 11); // here we call a function from the code we are testing that sets play one's move to rock with a value of 11

    should.equal(playerOneMoveOneType, 'rock'); // this is an assertion that tests that after the `setPlayerMoves()` function above is called, playerOneMoveOneType should equal `rock`
    should.equal(playerOneMoveOneValue, 11); // this assertion tests that setPlayerMoves can set the value of playerOneMoveOneValue
  });
})
```

### Running Tests and Interpreting Output with Mocha and Chai
### How do I run tests?
- To run tests for your projects, first open the root project directory in your terminal. 
- If you haven’t already, run npm install to install all necessary testing dependencies. 
- Finally, run `npm test` in your terminal. This command will run the code in your test script in the package json for your project.

### Test Suites
Tests for one feature are grouped together in describe blocks. This group of tests, called a test suite, describes the “Main Functionality” of the setPlayerMoves function. `Describe` takes a string and a callback function: the string describes the feature or behavior being tested, and the callback function contains all of the code for the different tests being run.
You’ll see that inside the describe block, the `afterEach` function is called. This is called a `hook`, or _a function that is called at certain points in the lifecycle of the process that it is running in_. The afterEach function gets called right after each it block is run, and customizing this function allows us to reset things that we want to reset between different tests.   
Here we call the function clearMoves which is a helper function that sets all of the moves back to undefined. It is written outside of any of the blocks, but used as a hook in many of them.

```javascript
function clearMoves() {
  playerOneMoveOneType = undefined;
  playerOneMoveOneValue = undefined;
  playerTwoMoveOneType = undefined;
  playerTwoMoveOneValue = undefined;
}
```
_It’s important for tests to generally start from a clean slate and for each test to be independent of the others, because we want the errors that we get from our tests to give us a specific diagnosis_ of what is wrong with our code.

### Test cases
Each `it` block describes more particular behavior to test. In the first `it` block, we test that setPlayerMovesactually exists and that it is a function so that it can correctly be used in the next block.   
In the second `it` block, we call the function setPlayerMoves, which is a function from the code that we are testing from our Rock, Paper, Scissors game. After setPlayerMoves is called with the arguments, the variable playerOneMoveOneType should be equal to the string ‘rock’ and playerOneMoveOneValue should be equal to the number 11.

### Assertions
Any individual assertion where we are comparing the actual and expected values can be called an assertion. The words should, expect, and assert in the tests indicate that an assertion is being made.
Each it block test includes multiple assertions, because there are multiple scenarios and edge cases that we want to test for. The error messages that you get from failed tests will most likely point to one of these assertions.


Try appending `.only() `or `.skip()` to your describe or it blocks in order to only run certain tests or skip other certain tests. See the mocha documentation for more details.

#### What happens when my code itself throws an error?
If executing your code causes an error to be thrown, mocha will log that error in the place of an assertion error. 

#### What happens when a test case fails?
Only the first failing assertion should will be displayed within each it block.

### Edge Cases
Tests are often written for various edge cases. This is common, because poor handling of edge cases is responsible for a lot of bugs!
An example of a common edge case is: how does a function handle weird input? What happens if a function that expects to get a number is passed a string, or is passed no argument at all? Do we want to throw an error? Return undefined? Regardless, we want the decision to be consistent and well-documented.
Planning and testing for these edge cases is a common use of tests, and it can make the difference between code that will work 80% of the time, and code that will work 100% of the time.


### Manual Testing
Software testing is the process of assessing the completeness and quality of computer software. Usually this is done by running a part of a system (like a web application) and comparing the actual behavior to the expected behavior.

One way to perform software testing is manual testing. Manual testing is a form of testing done by a human interacting with a system. With web apps, this might be clicking, dragging, and typing through a webpage. A list of actions and expected behaviors would be given. If the observed behavior doesn’t match the expected behavior, the application has an error.


### Automated Testing
Automated testing is the use of software to control the execution of tests and the comparison of actual behavior to expected behavior. All the testing you just did (and more) could be performed by a computer program.


### The Test Suite
You can refer to the code defining your app as implementation code, and the code defining your tests as test code.
A collection of tests for a web application is called a test suite. In the last exercise, you ran a test suite with npm test. In that case the test suite contained all tests for the application.
For example, if implementation code is written in index.js then the corresponding test code may be written in index-test.js.

### Regression
When adding a new feature to your product, it’s possible that something will break. If that break occurs within a feature developed earlier, it is called regression. When functionality previously developed and tested stops working, you may say the functionality regressed.

### Mocha
Instead of testing every function manually, developers automate their tests with a test framework.
Developers use test frameworks to organize and automate tests that provide useful feedback when errors occur. In this lesson we will use the Mocha test framework to write tests against JavaScript methods.

### describe and it blocks
In Mocha we group tests using the describe function and define tests using the it function. These two functions can be used to make your test suite complete, maintainable, and expressive in the following ways:
Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.
Provide informative messages: you can define your tests using human-readable strings.

```javascript
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

Both the describe and it functions accept two parameters: a `descriptive string` and a `callback function`. Though the functions are flexible, they are commonly used in the structure above: nest describe blocks to resemble the structure of your implementation code and write individual tests in it blocks. This makes your test suite isolated, maintainable, and expressive.

`assert [From NODE]`
In programming, a test compares an expected outcome to an actual outcome.

```javascript
assert.ok(a === 3);
```

In this case a === 3 evaluates to true, so no error is thrown.
If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

### Setup, Exercise, and Verify
This distinct and well-defined separation of steps makes your test more reliable, maintainable, and expressive.

The phases are defined as follows:
- `Setup` - create objects, variables, and set conditions that your test depends on   
- `Exercise` - execute the functionality you are testing
Verify - check your expectations against the result of the exercise phase. You can use the assert library here   
- `Teardown` - 
`const assert = require('assert');`

```javascript
// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(pop(['padawan', 'knight']) === 'knight'); 
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = pop(jediPath);

    // Verify
    assert.ok(popped === knightString);
  });
});
```

Some tests require a fourth phase called `teardown`. This step makes your test isolated.

`Teardown` - reset any conditions that were changed during the test
A test, like the example in this exercise, can make changes to its environment that could affect other tests. The teardown phase is used to reset the environment before the next test runs.

```javascript
describe('appendFileSync', () => {
  it('writes a string to text file at given path name', () => {

    // Setup
    const path = './message.txt';
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
    fs.unlinkSync(path);
  });
});
```

Hooks
Using teardown in the it block made your test isolated, but not reliable.
If the system encounters an error before it reaches the teardown, it will not execute that phase. In the previous example, an error may occur after the file is created but before it is deleted. The file would persist and may cause false negatives in future test runs.

Mocha provides hooks to solve that problem.
A hook is a piece of code that is executed when a certain event happens. Hooks can be used to set and reset conditions like the setup and teardown phases do. In Mocha, a hook is written within a describe block.

describe('example', () => {

  afterEach(() => {
    // teardown goes here
  });

  it('.sample', () => {
    // test goes here
  });
});

The other hooks in the Mocha library are 
1.before() - Executed once before all tests
2.beforeEach() - executed before each test 
3. after() - Executed once after all tests


WRITE EXPRESSIVE TESTS
A good test framework is fast, complete, reliable, isolated, maintainable, and expressive. In this lesson you will learn how to use Node’s assert library to write more expressive tests.
An expressive test is easy to read and descriptive, making it useful as a form of documentation for your implementation code. One way to make a test more expressive is clarifying its verify phase — the step where expected outcome is compared to actual outcome.
Node.js provides a library called assert with methods that help you write more expressive verification code. You can use the methods in this library in place of conditional statements to write less code and use human-readable language.


assert.ok
As a Node module, assert can be imported at the top of your files with
const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.ok(result, expected);
  });
});


assert.equal
The second line is more expressive: instead of parsing the entire statement, a reader only needs to read the first two words to know the test is verifying equality!

assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);


assert.strictEqual
const a = 3;
const b = '3';
assert.ok(a == b);
assert.ok(a === b);
The first assertion will not throw an error because it uses loose (==) equality. It performs a type conversion when comparing two things.
The second will throw an error because it uses strict (===) equality. It returns false if the types differ.

assert.strictEqual().
assert.equal() performs a == comparison
assert.strictEqual() performs a === comparison


assert.deepEqual I
Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b);


If you need to compare the values within two objects, you can use assert.deepEqual(). This method compares the values of each object using loose (==) equality.

The following code will not throw an error…
assert.deepEqual(a, b);
…and you can confirm by manually comparing the relation and age properties of each object.
a.relation == b.relation;
a.age == b.age;



assert.deepEqual II
In the last exercise you used deepEqual() to compare the values of two objects with loose equality. Arrays are also objects, so deepEqual() also compares their values with loose equality.
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];

assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error

assert.notEqual
describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    assert.notEqual(1, 2);
  });
});



 TDD WITH MOCHA
 Introduction
Test-driven development (TDD) is a programming technique where you write test code before implementation code. Test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.

The Red-Green-Refactor Cycle
One of the driving forces of TDD is the red-green-refactor cycle. “Red” and “green” correspond to the color of the text that our test framework produces in the terminal while running the tests in our suite. Red signifies failing tests and green corresponds to passing tests.

Red — Write tests that describe the intended behavior of implementation code, and then compare developer expectations with the actual results of implementation code. The tests should always fail at first because the implementation code for the desired behavior will be written in response to the failing test.
Green — Write just enough implementation code to make the test pass. The tests return green because the implementation code executes the intended behavior described by the test in the red phase.

Refactor — Clean up and optimize code following the characteristics of a good test. Refactoring involves actively considering test and implementation code and making revisions to the code base.


Getting Into The Red I

Step 1: Write The Test
The first step to writing a test with Mocha is to use describe and it blocks to describe the desired behavior of your code. It’s very important for tests to thoroughly describe the desired behavior with natural language. This will create the most helpful error messages and make it easy for you to understand the behavior that your test failed in executing.
Before running our test, we would use an assert statement to compare the desired result of our method with the actual result.

The first step in developing this method would be writing a test that could look like this:

describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      assert.equal(Phrase.initials('Nelson Mandela'), 'NM');
    })
  })
})

Step 2: Run the test
If we ran this test we would get the following error message in the terminal:

Step 3: The test fails (yea!)
The error message tells us that the error is related to the Phrase.initials code block. The ReferenceError tells us that the error is thrown because we don’t have a Phrase object. In the next exercise, we’ll show you the minimum possible code required to get this test to pass.

Red To Green I
The red error messages describe the failures of our implementation code, so we can specifically address each issue that is preventing our test from passing.
Following TDD, the next step would be writing the minimum possible implementation code to make our test pass. In this example, that would involve adding a line of implementation code so that .initials() returns our expected result, which is NM.
The minimum possible implementation code to make the test pass:

const Phrase = {
  initials(phr) {
    return 'NM';
  }
}


Congrats you’re in the green!
When refactoring, it’s critical to test early and often — if our tests turn red, then we know that something went wrong while we were refactoring, and we can undo those changes.
Let’s consider the test for our Phrase.initials method. We could rewrite the test with setup, exercise, and verification stages to make it more expressive and maintainable.

describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      // Setup
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      // Exercise
      const result = Phrase.initials(inputName);
      // Verification
      assert.equal(result, expectedInitials);
    });
  });
});


Getting into the Red II
The next step is to repeat this cycle to build a more complete implementation of the .initials method.
Here is what a second test for .initials() would look like:

describe('Phrase', () => {
  describe('.initials', () => {

    . . .

    it('returns the initials of a name', () => {
      const nameInput = 'Juan Manuel Santos';
      const expectedInitials = 'JMS';

      const result = Phrase.initials(nameInput);

      assert.equal(result, expectedInitials);
    });
  });
});

Red to Green II
Now that we have tests that cover more than one condition, it is time to program the actual behavior that we want our .initials method to execute.

const Phrase = {
  initials(inputName) {
    // Create an empty array for initials
    const initials = [];
    // Create an array of strings 
    const words = inputName.split(" ");
    // Iterate through the array of strings and push the first character of each to array
    words.forEach((word) => {
      initials.push(word.charAt(0));
    });
    // Return the initials as one string
    return initials.join("");
  }
}

Edge Case
An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for.

The test for throwing an error when a number is passed to Phrase.initials() would look like this:

it('raises an error if the parameter passed in is not a string', () => {
  // Setup
  const nameInput = 14;   
  // Exercise
  const exercise = () => { Phrase.initials(nameInput) };
  // Verification
  assert.throws(exercise, /only use string/);        
})

After getting our intended error message we would write just enough implementation code to pass the test. Which in this case would be adding the following to Phrase.initials():

if (typeof inputName !== "string") {
  throw new Error("ERROR: only use string");
}


The Testing Pyramid

Most full-stack web applications include the following layers:
A view that appears in a user’s web browser
A server that handles HTTP requests
A database that stores information about user interactions

Unit tests are isolated and fast tests that check one small behavior within your web application.
For example, we want to test whether our database can save a comment. 

System tests 
System tests are a group of fully integrated tests that exercise your entire web application.
For example, we want to test whether our blog renders with the correct post and comments.
This test exercises every layer of the web application:

The database stores the blog post.
The server sends the HTML to the browser.
The browser renders the view.
A test like this is slow and less descriptive but provides you with confidence that a large slice of your system is working as intended. 

Integration tests 
Integration tests include everything between unit tests and system tests. They exercise multiple parts of the web application, often in different layers.
For example, an integration test may check whether your web application can save a server-generated comment to the database. This test integrates two layers of your web application:
The server receives the comment and sends it to the database.
The database stores your comment.

Shape of a testing suite
The goal of a full-stack web application’s testing suite is to provide you with confidence that your application works as expected while executing in a timely fashion.
You could write few integration tests that provide you with confidence, and more unit tests that execute quickly and provide you with specific feedback.
The number and types of unit and integration tests that you write can be mapped onto the testing pyramid.


The Testing Pyramid
The testing pyramid is an approach to structuring your test suite.

Browser-level integration tests sit on the top of the pyramid. This layer is the narrowest because it should have the fewest number of tests — the slow nature of browser-level tests make them more expensive than server-level tests.
While server tests don’t need to interact with the browser, they usually exercise parts of the model or database. They sit close to the middle of the spectrum between unit and system tests. They provide a moderate level of confidence as they may exercise multiple layers of the stack. Server tests are more expensive and provide less specific error messages than model tests.
Compared to browser and server tests, model and database tests exercise a smaller portion of the stack. They provide the most specific feedback, but not much confidence that the whole system is working as expected. Because they are the cheapest, you can write a lot of them without significantly slowing the amount of time it takes to run your test suite.


Outside-In Test-Driven Development
Outside-in TDD is an approach that developers use to build full-stack web applications. It leverages the same red, green, refactor steps that we covered above, but with one caveat — a failing test does not always inform you to write new implementation code. Instead, it may require that you implement new functionality at a different level.
You start at the top of the stack, the view, and write tests as you work your way towards the database layer.
If a test pushes you to a lower level, you restart your red, green, refactor cycle by writing a new test. This test informs the implementation at your new layer. You continue the TDD cycle at this lower level until:
You need to drop another layer to implement the desired behavior
You have addressed the reason for dropping to the current layer
Once you address the reason for dropping a layer, you can start working your way back up the testing pyramid. If you’re in the model/database layer, you step up to the server, and run your server tests to see if you get a different response. The response should be one of the following:
The test passes — you can start another red, green, refactor cycle at the server level or step up to the view layer.
The test fails — the server test that pushed you to the model layer fails, but for a different reason. This is common, and indicates that you’re making progress. This failure may indicate that you need to write additional implementation at the server level, or drop back to the model.

Let’s take stock of our seven new tests:

Feature: Comments are rendered to a user’s browser.
Server: The server generates an HTML field for comments.
Server: The server has access to ten comments from the database.
Model: The Comment.latest method returns ten comments from your database.
Model: The Comment.latest method returns the last ten comments in your database in reverse chronological order.
Model: The Comment.latest method returns an empty array when your database has zero comments.
Model: The Comment.latest method returns all of the comments when your database has between zero and ten comments.

Refactoring Your Test Suite
The way you approach refactoring will vary based on the size and types of tests in your suite. One guiding light in refactoring is to optimize the suite for confidence and speed. Because we used TDD to implement our comment feature, we should feel confident that our comments are working as expected, and the feature is fully covered.

Consider the questions below when deciding how to refactor your suite:

How much longer does it take to run my test suite with these new tests?
Is the additional amount of time that your test suite takes to run acceptable?
Is there overlap between any of my new tests?
Is there overlap between my new tests and existing tests?


TDD FEATURE-LEVEL TESTS
Starting at the feature level of the pyramid (going outside-in) means you begin by writing tests that inform implementation of the code that a user’s browser renders.

Feature Test Toolbelt

Chai
Node.js has a default assertion library that provides enough functionality to write basic test code. The Chai testing library extends the types of assertions we can make.
Chai is an assertion library for Node.js and browsers that can be paired with any JavaScript testing framework.

PhantomJS
PhantomJS is a headless browser scriptable with a JavaScript API, which allows us to write tests that mimic user interaction and then evaluate the results. It does not require us to render the application in a browser.
A browser runs “headless” when it doesn’t render anything to the screen, but runs in the background.

WebdriverI/O
WebdriverIO provides methods that allow us to programmatically interact with the user-facing elements of our app in the headless browser that PhantomJS runs.


Normal Browser vs Headless Browser:
Real Browsers are running and performing functions or commands in front of users in UI (User Interface). While doing automation testing, user writes code and run it. A browser opens and starts performing functions according to written commands. Examples of Real browsers are Google Chrome, Firefox, and Internet Explorer etc.

Headless browsers are basically web browsers that lack a graphical user interface. They are running and performing functions or commands in the backend without any UI (User Interface) showing to the users. While doing automation testing, user writes code and run it. A browser never shows up but testing start happening at the backend. Examples of Headless browsers are HtmlUnit, PhantomJS and ZombieJS etc.

Headless Browsers are much faster than real browsers:
Real browsers take time opening, rendering html, CSS, Javascript and images while headless browsers don’t require it. Headless browsers will start performing functions without waiting for page to load completely.

Headless browsers aren’t representing real users:
That’s why user can’t catch some bugs like images are crashing or not as UI is not showing to him.

Error Detection in Real Browsers is Quite Easy:
In Real browser as functions are performing in front of user and he can interact with it so he can easily detect where the tests goes fail. And can easily debug if anything goes wrong.



Feature Test I
Feature tests exercise behavior by simulating a user navigating the application in a web browser.

The first feature test we want to write is to check our application’s empty state. The functionality we want to test is:
When a user visits the homepage, the poems section is empty

We want to make sure that when there are no poems in the database, there are no poems rendered on the homepage. This is the application’s empty state.
describe('Poetry web app', () => {
  describe('user visits root', () => {

  });
});


The Plumbing
Next, we reach for our feature testing toolbelt. We start by to using the global browser variable that is provided by WebdriverI/O.

The browser variable is powerful because it gives us access to the browser that Phantom is running in the background. We can simulate a user interacting with our website by calling different methods on the global browser variable in our test suite.

For example, we can use browser.url() to simulate a user visiting the home page of our application, which is the first behavior we want to test.
The .url method navigates to the URL that is passed to it as an argument. The following line of code would navigate to the Codecademy website in the Phantom browser.
browser.url('https://www.codecademy.com')

describe('poetry web app', () => {
  describe('user visits root', () => {
    it('page starts blank', () => {
      browser.url('/');
    });  
  });
});

Assert
The last thing our test needs is an assert statement to verify that the behavior we expect is equal to the actual behavior of our code.
We want to make sure our app is in an empty state.
We can write a test for this behavior by deciding that poems will be listed in an HTML element with an id attribute set to poems. Then, write an assert statement to verify that the element with the ID poems is empty
assert.equal(browser.getText('#poems'), '')

Because we will render the poetry onto the page as text, we can evaluate the contents of the HTML element as a string.
The .getText method, from WebdriverI/O, gets the text content from the selected DOM element.
describe('User visits root', () => {
  describe('without existing poems', () => {
    it('page starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#poems'), '');
    });
  });
});

Feature Test I: Passing
When executing a feature test that fails, errors will have messages that discuss the failure in terms of HTML (i.e. that text or button that you said would be on the page isn’t on the page) or HTTP (i.e. the request that this page made resulted in a 404 HTTP status because the route you requested didn’t exist).
The error message describes the issue in terms of HTML elements and tells us that the element we are expecting does not exist on our page. This is because we have not yet created the HTML in our index.html file.

Using a strict TDD approach, we would write just enough HTML code to make our test pass. Let’s do that now.
<section id="poems"></section>

Feature Test II: Setup
  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {
      const title = 'Words Birth Worlds';
      const poem = 'Our words are marvelous weapons with which we could behead the sun';
    });
  });


Feature Test II: Exercise
we will use the .setValue method, which sends a sequence of keystrokes to an element, based on a string argument.
We will use .setValue() to mimic a user entering the title and poem into the corresponding HTML input elements at the root of our web app.
The first argument passed to .setValue() is the CSS selector that references an HTML element, and the second argument is the value you want to assign that element.

  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {
      // Setup
      const title = 'Words Birth Worlds';
      const poem = 'Our words are marvelous weapons with which we could behead the sun';
     // Exercise
      browser.url('/');
      browser.setValue('input[id=title]', title);
      browser.setValue('textarea[id=poem]', poem);
      browser.click('input[type=submit]');
    });
  });

  Feature Test II: Verify
  The Chai Assertion Library allows us to use the .include method to check if the string that is returned from .getText() includes the substrings of the title and poem that the user has submitted:
assert.include(browser.getText('#poems'), title);
assert.include(browser.getText('#poems'), poem);
     // Exercise
      browser.url('/');
      browser.setValue('input[id=title]', title);
      browser.setValue('textarea[id=poem]', poem);
      browser.click('input[type=submit]');
      // Verify
      assert.include(browser.getText('#poems'), title);
      assert.include(browser.getText('#poems'), poem);


Stuck In The Red
The error message describes the HTML issue that is preventing our test from continuing.
To address this error message, we would create an <input> with the ID, title in our index.html file. It would look like this:
The complete index.html file would now look like this:

<section id="poems">
</section>

<label for="title">Title</label>
<input id="title">

<label for="poem">Your poem:</label>
<textarea id="poem"></textarea>

<input type="submit">



SERVER TESTING STACK
Server tests are used to test the server response only, not any front-end rendering of code or user interactions. We “disconnect” the browser and interact directly with the server using requests. 
Server tests are commonly used to test API responses, but we also use server tests for any server response that our application relies on. This can include checking status codes and error messages.

Testing HTML Responses
Our back-end server is serving dynamic HTML to the user. For the homepage, this is located in the jsdom-test.js file to the right. It is possible to use .include() to verify that the HTML response contains certain Strings, but gets cumbersome to verify the hierarchical relationships of DOM elements.
We can use the jsdom library to improve this type of assertion. It allows us to select elements of the DOM and check relationships and content. To increase the readability of our tests, we abstracted the jsdom functionality into a custom function, parseTextFromHTML:

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};


Async / Await
A server typically handles many requests at a time, but may be only capable of processing a subset of the requests concurrently. One side effect of this is that the server response time is neither instant nor predictable. If no other processes are occurring on the server, requests are handled quickly, but if the server is close to full capacity, the request can take a few seconds or even timeout.
We need a way to receive asynchronous responses from the server and then act on them. The async/await pattern introduced in Node 8 helps us write readable descriptions of the behavior of our application which is an important part of writing good tests.
To use this pattern, define the function with the async keyword. Then, within the function, use the await keyword in front of the asynchronous function you are calling. For example:

const foo = async () => {
  console.log(await someAsyncThing());
  return true;
}

foo();


SuperTest
const request = require('supertest');
This library was specifically designed for testing Node server responses and integrates well with Mocha and Chai. To use SuperTest, we pass the app object from our app into the request function. To make a GET request, we use .get() with the desired route as the argument:
await request(app)
          .get('/')
          .send();

It is also possible to perform a POST using SuperTest. We chain any desired properties or inputs to the HTTP call, and use .send() to make the request:
await request(app)
          .post('/messages')
          .type('form')
          .send({author, message});


SERVER TESTING PATTERNS
As you develop an application, you may realize that you can replace feature tests or reduce them with equal coverage at a lower level. One question to ask when deciding between a full feature test versus a server test is:
“Is it worth trading a slow feature test for a faster server test that doesn’t test the UI?”

describe('when the Message is valid', () => {
    it('creates a new message', async () => {
      const author = 'user name';
      const message ='feature testing with TDD makes me feel empowered to create a better workflow';
      
      //save message
      const response = await request(app)
        .post('/messages')
        .type('form')
        .send({author, message});
      //check response to verify message is saved
      assert.include(parseTextFromHTML(response, '#messages'), message);
    });
})

Status Codes
Server tests are slightly faster than browser-driven feature tests. Since the web browser is cut out of the test, we are not testing how things are rendered for the user. Instead, we are focused on the server response.
One use of TDD at the server level is to ensure that the HTTP status codes are returned as expected. Verifying status codes provide the most basic level of confidence that the server is functioning correctly.

To verify status codes, we are asserting that the response status is equal to the status code integer that our application requires:
assert.equal(response.status, 200);


Response Content
Many servers return dynamic HTML content based on the user, the URL accessed, header values, and more. We use TDD to ensure the server responds correctly for each case.
We can organize our tests into two categories:

tests that exercise the “Happy Path” — expected use cases of our application
tests that exercise the “Sad Path” — unexpected or invalid use of our application

As an example, after requesting a valid profile page for “My Name”, you may receive the following response content:
response.text = '<div><div id="my-name">My Name</div></div>';
You can retrieve the content of #my-name and check it using the following:
assert.include(parseTextFromHTML(response.text, '#my-name'), "My Name"); //True

We could also write a separate test to check the corresponding “sad path”. Perhaps there is not yet a page for “Your Name”, so you should not receive a response containing similar HTML. We use .notInclude() to verify that the response is not including “Your Name” :
assert.notInclude(parseTextFromHTML(response.text, '#my-name'), "Your Name"); //True


Refactoring: Route Parameters
Think: 'welcome/:username' => '<h1>Your Name is ' + req.params.username +'</h1>'.

Refactoring: Handlebars
 In the code so far, we have been responding with inline HTML strings. On a large project, this could make it difficult for the front end developer to organize and maintain.
An improved approach to this is using a templating library like Handlebars to separate the HTML view from the JavaScript controller.

In the web app that you’ve built in this lesson, we’ve placed the templates in the /views folder and have an extension of .handlebars. Our controller will now use render to create the view and pass in any variables:
const param = 'Foo';
res.render('templateName', {param});
The templates are written like regular HTML, but variables can be accessed within the view using double curly braces:

<h1>{{ param }}</h1>

When the view is rendered, it will replace {{ param }} with its actual value:
<h1>Foo</h1>


API Errors
one of the use cases for server testing is for checking API responses, especially the “sad path” where a user interacts with the server in an unexpected or disallowed manner. We need to make sure our server properly handles invalid passwords, form field errors, etc.
Keep in mind that while there may only be one “happy path” for an interaction (user submits a valid password), there can be many corresponding “sad paths” (password is too short, doesn’t contain special characters, etc). By testing the majority of these on the server level, it saves us from testing them at a more resource intensive level including the user view.


MONGOOSE FUNDAMENTALS
What is Data?
Data in the context of software and web development is digital information.

What is a Database?
A database is a structured set of data held in a computer.
Databases support storage and manipulation of data. For a web application to have persistence, a developer uses a database to store data. The developer can write methods to create, read, update, and delete information in the database.

Mongoose Collections & Documents
Mongo stores data in ‘binary’ JSON (BSON) documents. BSON documents have a similar structure to JavaScript objects.

MongoDB stores documents in a collection. A MongoDB database is made up of these collections of documents.
A Mongo collection is like a table in a spreadsheet or relational database — each document is like a row in the spreadsheet.
Documents contain one or more key/value pairs. Each key has a corresponding value of a specified data type, like array, number, or string. MongoDB organizes documents with similar structure into collections.

Schemas
Mongoose is a JavaScript library that provides methods to interact with a MongoDB database. Mongoose translates JavaScript objects (JSON) to BSON data in a MongoDB database, and vice versa.

Mongoose interactions are based on Schema and Model declarations.
A Schema defines the shape of the documents within that collection.
A Model maps to a MongoDB collection and its documents.


Mongoose Schema
Remember, each record in a MongoDB database is a document with key/value pairs as entries. Using Mongoose’s Schema, we can set the structure of those documents dynamically.
Imagine you were creating a Schema for the database of a web-based poetry application where you could both write and publish poems. Each key in our poemSchema will define a property in our documents which will be cast to its associated SchemaType.

const poemSchema = new mongoose.Schema({
  title: String
})

Each document that is derived from the poemSchema above will have a title property with a string saved to it.
Mongoose will cast mismatched data types to the specified SchemaType. For example, if we entered the number 1 as a title for a poem, Mongoose would cast the entry so that it entered that database as a string "1". Using casting, Mongoose ensures that string properties are assigned strings values.

Paths
The key-value pair in a schema is called a path. Paths define the name and type of fields in a MongoDB document.
const poemSchema = new mongoose.Schema({
  title: String,
  body: [String],
  published: Boolean,
})

The schema above has three paths: title, body, and published. Each path is set to a different schema type. The [String] schema type, assigned to body, means a document that is derived from the poemSchema schema can store an array of strings to the body field.

Paths in Mongoose can have many data types. Besides data types like string, integer (Number), boolean, and array, Mongoose also provides:
Timestamp − timestamp. This can be handy for recording when a document has been modified or added.
Object ID − This datatype is used to store the document’s ID.

Validators
Often, we want to specify more than just the type of a path — we can use validators to ensure other aspects of a document’s input value.
Data validation is intended to provide guarantees about user input. Mongoose has several built-in validators.

const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: [String],
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
})

If you save a document with an invalid path value, you will receive this error message Path `title` is required.. You can define a custom error message like this:
const poemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required!'
  }
})

Models
we need to convert our poemSchema into a Model we can work with. Schemas provide the definition for a model. A model maps to a collection in your MongoDB database.
Models are defined by passing a Schema instance to mongoose.model like this:
mongoose.model(modelName, schema):

The first argument is the singular name of the collection your model is for. The second argument is your previously created Schema. In the case of our poetry web app, turning our schema into a model would look like this:
const Poem = mongoose.model('Poem', poemSchema); 

Models are constructors that we define based on our Schema. They represent documents which can be saved and retrieved from our database. All document creation and retrieval from the database is handled by these models.


Create
Our model is a class with properties that we define in our schema. We can construct documents as instances of our model. Creating documents and saving them to the database can be done by calling .create() on our model. In the poetry app example it would look like this:

const Poem = mongoose.model('Poem', poemSchema);

const poemProperties = {
    title: "Rewrite Reality" ,
    body: ["Re-imagine the consumption of the stagnant status quo", 
           "No matter how nice you dress", 
           "The emperor is still wearing no clothes"],
    published: false
}

runWithDatabase(async () => {
  // Create and save a document
  await Poem.create(poemProperties);
});

The runWithDatabase function is designed to accept a method as input, and run it after we connect to a database and before we disconnect from it.
This would create a new document in our database, with the paths and properties defined in the code above. 


Queries
At this point, we will start creating instances in a MongoDB database, then query the database for the values we saved. All of the method calls and queries will be passed to runWithDatabase().
If we wanted to search for the poem that we saved to the database, we could write a Mongoose query and call .findOne() on our Poem model:

runWithDatabase(async () => {
   Poem.create(poemProperties)
   const poemMatch = await Poem.findOne({ title: 'Rewrite Reality' });
   console.log(`Found poem: ${poemMatch.body}`);
});

.findOne() returns a document that has a title path with the value 'Rewrite Reality'
What if we wanted to find all the documents that matched a specified criteria? We can use .find(), which returns an array of all the documents that match the argument passed to it.

runWithDatabase(async () => {
  Poem.create(manyPoems);
  let publishedPoems = await Poem.find({ published: true })
  // Check that it works by logging the number of returned documents
  console.log(`Published Poems: ${publishedPoems.length}`)
});


Methods
Mongoose supports the creation of methods on both instances of documents and collections of documents (the model).

.statics() adds static “class” methods to the model.
.methods() adds an instance method to documents.


Model Methods — .statics()

const poemSchema = new mongoose.Schema({
...
)}

poemSchema.statics.firstAlphabetically = function(callback) {
  return this.findOne({}).sort('title').exec(callback);
}
The method is part of the model, which in this example would return the first document, after sorting the values of the title path alphabetically.

In order to use the new .firstAlphabetically method, we would call it inside runWithDatabase() on the Poem model like this:

const Poem = mongoose.model('Poem', poemSchema);
runWithDatabase(async () => {
  Poem.create(properties));
  const firstAlpha = await Poem.firstAlphabetically();
  console.log(`The first poem alphabetically is: ${firstAlpha.title}. It goes like this: ${'\n'} ${firstAlpha.body}`);
});


Document Methods — .methods()
Instances of a model are documents. Documents have many of their own built-in instance methods. It is also possible to create custom document instance methods. Below, we create a method for our poem example to change the published path value to true on any document in the database.

const poemSchema = new mongoose.Schema({
...
)}

poemSchema.methods.publish = function(callback) {
  this.published = true;
  return this.save();
}

.save() writes the current JavaScript object as a MongoDB document.

Inside runWithDatabase() we could call .publish() on a document like this:

const Poem = mongoose.model('Poem', poemSchema);
runWithDatabase(async () => {
  Poem.create(properties));
  ...
  const publishIt = await Poem.findOne({ title: 'Rewrite Reality' });
  console.log(publishIt.published)
  await publishIt.publish();
  console.log(`${publishIt.title} has had its publish field changed to ${publishIt.published}`)
  });

Output:
false
Rewrite Reality has had its publish field changed to true


Mongoose is a Node package that interacts with a running MongoDB database.
MongoDB stores documents in collections and collections of documents in databases. Each document has key-value pairs as entries.
Using a Schema, we can set the structure of documents dynamically, using paths with schema types and validators.
Models are JavaScript classes that we compile from our Schema definitions.
You can use models to create, read, update, and delete documents from a database.
You can query a database using .find() and .findOne(). Mongo also provides query operators to allow for more complex queries.
Mongoose also allows for the creation of methods associated with a database:
.statics() adds static “class” methods to the Models itself.
.methods() adds an instance method to documents.



MODEL TESTING PATTERNS
A chat app manages messages, users, and chat rooms. A restaurant app manages customers, tables, and orders. How do applications define these entities and their interactions? The answer is the model layer.
Models represent the entities and interactions in a web application’s problem domain. A model can define each entity, describe the shape of the data stored for each entity, validate the data, store it in a database, and interact with it.

To better understand the concept of a model, take this example: a full-stack web application manages the inventory of a zoo. It can add animals, remove animals, count animals, and store that information for later use. The app can be divided into three layers:
1. Front-end: a webpage with buttons to allow users to add and remove animals. Could be implemented with HTML and CSS.
2. Server: an application to handle HTTP requests and responses. It routes requests, like the addition and removal of animals, and defines responses, like the count of animals after addition/removal. Could be implemented with Express.
3. Database and Models: storage and shape of the animal data. The data is grouped by animal, each with properties like species name, count, and risk-level. These fields and the methods to interact with them are defined by models, and the storage is managed by a database. Could be implemented with Mongoose models and a MongoDB database.


Path Definition
You’ll need multiple model tests to satisfy this server test. Since they don’t touch HTML/CSS selectors nor HTTP actions/status codes, model tests are typically faster than feature-level and server-level tests.

The model tests will confirm that:
the Dinosaur model is defined
the Dinosaur model has a path called name

  describe('#name', () => {
    it('is a String', () => {
      const dino = new Dinosaur({
        name: 'T-rex'
      });
      
      assert.strictEqual(dino.name, 'T-rex')
    });
  });


Hooks
let’s recall some good TDD practices:
make your tests expressive by writing them in four phases
make your tests isolated with setup and teardown phases
follow the red, green, refactor cycle

setup and teardown phases in beforeEach and afterEach hooks provided by Mocha.

Before each test, your beforeEach hook will connect to the database and drop any old data using these method calls:
await mongoose.connect(databaseUrl, options);
await mongoose.connection.db.dropDatabase();

After each test, your afterEach hook will disconnect from the database with
await mongoose.disconnect();

You can refactor these hooks by wrapping the three calls in two helper functions: connectAndDrop and disconnect. In your test file, import those functions and add them to your hooks.


Path Validation I
you’ll be using a custom validator function. It receives the value to validate as its first argument. It returns a Boolean, which is false if the value fails validation. Avoid arrow notation () =>. Using function() notation preserves the proper binding of this. Here’s the syntax:

// Define validator
validate = function (value) {
  ...
}

// Add validator to Schema
const DinosaurSchema = new Schema({
  count: {
    type: Number,
    validate: [validator, 'custom err msg']
  }
});


You can test validation like this:
Create an instance of a model with validators and execute the validations with the validateSync method. Any validation errors will be stored in [instance].errors.[path], like dino.errors.count.
Make assertions on [instance].errors.[path] and its properties.


Path Validation II
Remember that validation error messages are defined in the schema like this:

age: {
   type: Number,
   validate: [validator, 'Age must be above 9.']
}

And you can assert the value of multiple properties of [instance].errors.[path] like message, path, kind, and name. You can write out multiple assertions or use assert.include:

  const errorInfo = person.errors.age;
  assert.include(errorInfo, {
    message: 'Age must be above 9.',
    path: 'age',
    kind: 'user defined',
    name: 'ValidatorError'
  });


Methods I
Mongoose schemas support:
static methods: methods called by a model. They typically operate on a collection of documents (instances of the model).
instance methods: methods called by an instance of a model. They typically operate on the document (model instance) itself.

From the previous exercise, you might recognize Dinosaur.findOne() as a static method and dino.save() as an instance method.

it requires a static method, which is defined in [schema].statics and called according to the example below.

// static method - implementation
DinosaurSchema.statics.findByName = function(name, callback) {
  return this.findOne({ name: name }, callback);
};
// static method - call the method
await Dinosaur.findByName('Velociraptor')

Use function() notation instead of arrow => notation to properly bind this.


Methods II
.breed() will increase the count of one dinosaur. This kind of method is specific to an instance of a model, so you’ll need to define it as an instance method. Do this by storing it in [schema].methods as shown below.

// instance method - implementation
DinosaurSchema.methods.breed = function() {
  this.count = this.count + 1;
};
// instance method - call the method
dino.breed()


The model layer represents entities and interactions in a web app’s problem domain.
Model paths can be test-driven using validators. Call validateSync and make assertions on the properties of [instance].errors.[path].
The storage of data can be tested with construction and updating methods like save and update. Retrieval can be tested with query methods like find, findOne, and findby.
Static methods are stored in [schema].statics and instance methods are stored in [schema].methods. Both can be tested like any other JavaScript function.

Model.find({cost: {$lt: 50} }) => $lt represent less than which selects all items costing lesser than 50

--------------------------------------------
YOUTUBE: Academmind:

Diff kinds of test:
1. Unit Tests - Fully Isolated
2. Integration Tests - With dependencies - function calling a function
3. End-to-End Test - Full flow of the DOM/UI

