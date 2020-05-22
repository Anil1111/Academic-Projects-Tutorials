# React.JS
React.js is a JavaScript library. It was developed by engineers at Facebook.

## What is JSX?
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!
If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

Here’s an example of a JSX element:   
`<h1>Hello world</h1>`   

JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array

Several JSX elements being stored in an object:
```javascript
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```

A single JSX element can have many attributes, just like in HTML:
```javascript
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
```

## NESTED JSX
```javascript
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
 ```

 a JSX expression must have exactly one outermost element.
 The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

## Rendering JSX

To render a JSX expression means to make it appear onscreen.
The following code will render a JSX expression:

```javascript
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

**ReactDOM** is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.   
`ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM.

`ReactDOM.render()`‘s first argument should evaluate to a JSX expression, it doesn’t have to literally be a JSX expression.

```javascript
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);
```

_it only updates DOM elements that have changed._   
That means that if you render the exact same thing twice in a row, the second render will do nothing:


## Problem of DOM Manipulation:

This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.
The Virtual DOM
In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.'A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.
Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. 

In summary, here’s what happens when you try to update the DOM in React:
The entire virtual DOM gets updated.
The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
-By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”
The changed objects, and the changed objects only, get updated on the real DOM.
Changes on the real DOM cause the screen to change.


Advanced JSX:

1. class vs className
Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word class.
In JSX, you can’t use the word class! You have to use className instead:
<h1 className="big">Hey</h1>
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
React elements and react components: https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/

2. Self-Closing Tags
In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:
<br/> is valid and not <br>

3. Curly braces in JSX
Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers - it reads them as text, just like HTML. The bwlow wil render in HTML as 2+3
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);

4. JS in JSX
treat me like ordinary JavaScript and not like JSX.”
You can do this by wrapping your code in curly braces.
<h1>{2 + 3}</h1>

5.Variables in JSX
That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.
const name = 'Gerdo';

// Access your variable // from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

6. Variable Attributes in JSX
When writing JSX, it’s common to use variables to set attributes.

// Use a variable to set the `height` and `width` attributes:
const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

7. Event Listeners in JSX
You create an event listener by giving a JSX element a special attribute. Here’s an example:
<img onClick={myFunc} />

function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.

8. JSX Conditionals: If Statements That Don't Work
Here’s a rule that you need to know: you can not inject an if statement into a JSX expression.
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)

9. Conditionals that work:
How can you write a conditional, if you can’t inject an if statement into JSX?
Well, one option is to write an if statement, and not inject it into JSX.
if (coinToss() === 'heads') {
  img = <img src={pics.kitty}/>
} else {
  img = <img src={pics.doggy}/>
}
ReactDOM.render(img, document.getElementById('app'));

10. JSX Conditionals: The Ternary Operator
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

const img = <img src={pics[coinToss() === 'heads' ? kitty : doggy]} />;


11.JSX Conditionals: &&
&& works best in conditionals that will sometimes do an action, but other times do nothing at all.
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

12. .map in JSX
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>

13. Keys:
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
keys don’t do anything that you can see! React uses them internally to keep track of lists. 
Not all lists need to have keys. A list needs keys if either of the following are true:
- The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off.
- A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  <li key={'person_'+i}>{person}</li>
);
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

14. React.createElement
The following JSX expression:
const h1 = <h1>Hello world</h1>;

can be rewritten without JSX, like this:
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement(). Every JSX element is secretly a call to React.createElement().


REACT COMPONENT:
React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.
This code will create and render a new React component:

import React from 'react';
- This imported object contains methods that you need in order to use React. The object is called the React library.
import ReactDOM from 'react-dom';
-The methods imported from 'react-dom' are meant for interacting with the DOM. 

A render method must contain a return statement. Usually, this return statement returns a JSX expression:
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

every component must come from a component class.
A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.
To make a component class, you use a base class from the React library: React.Component.
React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you’ve done before, give it the same name as a component class. Voilà, there’s your component instance!

**JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, “I will be a component instance and not an HTML tag.”

ReactDOM.render() will tell <MyComponentClass /> to call its render method.
<MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>.

Use a Variable Attribute in a Component
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img         src={redPanda.src}          alt={redPanda.alt}          width={redPanda.width} />
      </div>
    );
  }
}


Put Logic in a Render Function

class Random extends React.Component {
  render() {
    const n = Math.floor(Math.random() * 10 + 1);
    return <h1>The number is {n}!</h1>;
  }
}

Use a Conditional in a Render Function
Notice that the if statement is located inside of the render function, but before the return statement

Use this in a Component
You are especially likely to see this inside of the body of a component class declaration. Here’s an example:

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
The simple answer is that this refers to an instance of IceCreamGuy
The less simple answer is that this refers to the object on which this‘s enclosing method, in this case .render()
Why don’t you need parentheses after this.food? Shouldn’t it be this.food()?
You don’t need those parentheses because .food is a getter method. You can tell this from the get in the above class declaration body.

Use an Event Listener in a Component
 the component class has two methods: .myFunc() and .render(). .myFunc() is being used as an event handler. .myFunc() will be called any time that a user hovers over the rendered <div></div>.
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}

**Creating a React App

1. Set up the boilerplate application
Facebook has created a node module create-react-app to generate a boilerplate version of a React application.

Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as you move between React projects. It also provides an out-of-the-box build script and development server.


Folder Structure of react app:

package.json
name is the name of your app
version is the current version
"private": true is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem.
dependencies contains all the required node modules and versions required for the application
devDependencies contains useful node modules and versions for using the React app in a development environment
scripts specifies aliases that you can use to access some of the react-scripts commands in a more efficient manner. For example running npm test in your command line will run react-scripts test --env=jsdom behind the scenes.

node_modules
This directory contains dependencies and sub-dependencies of packages used by the current React app, as specified by package.json

package-lock.json
This file contains the exact dependency tree installed in node_modules/. This provides a way for teams working on private apps to ensure that they have the same version of dependencies and sub-dependencies. It also contains a history of changes to package.json, so you can quickly look back at dependency changes.

public
This directory contains assets that will be served directly without additional processing by webpack. index.html provides the entry point for the web app. You will also see a favicon (header icon) and a manifest.json.
The manifest file configures how your web app will behave if it is added to an Android user’s home screen (Android users can “shortcut” web apps and load them directly from the Android UI). You can read more about it here.
The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device. A typical manifest file includes the app name, the icons the app should use, and the URL that should be opened when the app is launched.

src
This contains the JavaScript that will be processed by webpack and is the heart of the React app. Browsing this folder, you see the main App JavaScript component (App.js), its associated styles (App.css), and test suite (App.test.js). index.js and its styles (index.css) provide an entry into the App and also kicks off the registerServiceWorker.js. This service worker takes care of caching and updating files for the end-user. It allows for offline capability and faster page loads after the initial visit.
As your React app grows, it is common to add a components/ directory to organize components and component-related files and a views directory to organize React views and view-related files.



3. Starting the React app development server
- npm install -g create-react-app #to install
- create-react-app <name-of-app> #create new react project
- npm start #to start the app on dev server

-----------------------------------------------
A Component in a Render Function
Render methods can also return another kind of JSX: component instances.

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

this.props
Information that gets passed from one component to another is known as “props.”

Access a Component's props
Every component has something called props.
A component’s props is an object. It holds information about that component.
To see a component’s props object, you use the expression this.props. 

render() {
  console.log("Props object comin' up!");
  console.log(this.props);
  return <h1>Hello world</h1>;
}

Pass `props` to a Component
**If you want to pass information that isn’t a string, then wrap that information in curly braces

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
<Greeting myInfo={["top", "secret", "lol"]} />

Render a Component's props
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Rybu' />, 
  document.getElementById('app')
);


Pass props From Component To Component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="name"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);



Put an Event Handler in a Component Class
class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}


Receive an Event Handler as a prop
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}



this.props.children
Every component’s props object has a property named children.
this.props.children will return everything in between a component’s opening and closing JSX tags.
this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js. In Example 1, <BigButton>‘s this.props.children would equal the text, “I am a child of BigButton.”
<BigButton>
  I am a child of BigButton.
</BigButton>

In Example 2, <BigButton>‘s this.props.children would equal a <LilButton /> component.
<BigButton>
  <LilButton />
</BigButton>

In Example 3, <BigButton>‘s this.props.children would equal undefined.
<BigButton />

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.


defaultProps
If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.
You can make this happen by giving your component class a property named defaultProps:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps = { text: 'yo' }; 



STATE.
Dynamic information is information that can change.
There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.

Setting Initial State
To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

<Example />


this.state should be equal to an object,
 This object represents the initial “state” of any component instance. 
 It is important to note that React components always have to call super in their constructors to be set up properly.
Methods should never be comma-separated, if inside of a class body. This is to emphasize the fact that classes and object literals are different.
this.setState() takes an object, and merges that object with the component’s current state. If there are properties in the current state that aren’t part of that object, then those properties remain how they were.

Update state with this.setState
A component changes its state by calling the function this.setState().
this.setState() takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.
this.setState({ hungry: true });


Call this.setState from Another Function
The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}



this.setState Automatically Calls render
Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().
That is why you can’t call this.setState() from inside of the .render() method! this.setState() automatically calls .render(). If .render() calls this.setState(), then an infinite loop is created.


--------------------------------------------------

Stateless Components Inherit From Stateful Components
Our programming pattern uses two React components: a stateful component, and a stateless component. “Stateful” describes any component that has a state property; “stateless” describes any component that does not.
In our pattern, a stateful component passes its state down to a stateless component.

Build a Stateful Component Class
Let’s make a stateful component pass its state to a stateless component.
To make that happen, you need two component classes: a stateful class, and a stateless class.


Don't Update props
class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
A component should never update this.props. Look at Bad.js to see an example of what not to do.
This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can’t change its props, then what are props for?

A React component should use props to store information that can be changed, but can only be changed by a different component.
A React component should use state to store information that the component itself can change.



Child Components Update Their Parents' state
The stateless, child component will update the state of the parent component.


One Sibling to Display, Another to Change
you will have one stateless component display information, and a different stateless component offer the ability to change that information.

---------------------------------------------------------------------------
Inline Styles
An inline style is a style that’s written as an attribute, like this:
<h1 style={{ color: 'red' }}>Hello world</h1>
The outer curly braces inject JavaScript into JSX. They say, “everything between us should be read as JavaScript, not JSX.”
The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:
{ color: 'red' }

Make A Style Object Variable
An alternative that’s often nicer is to store a style object in a variable, and then inject that variable into JSX.
const style = {
  color: 'darkcyan',
  background: 'mintcream'
};

return (
  <h1 style={styles}>
    Hello world
  </h1>
);

Style Name Syntax
In regular JavaScript, style names are written in hyphenated-lowercase:
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};

In React, those same names are instead written in camelCase:
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};

Style Value Syntax
In regular JS, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write "450px" or "20%".
In React, if you write a style value as a number, then the unit "px" is assumed.
If you want a font size of 30px, you can write:
{ fontSize: 30 }
{ fontSize: "2em" }

Share Styles Across Multiple Components
One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.


Separate Container Components From Presentational Components: Explanation
Here’s the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.
Because a presentational component(HTML Content) will always get rendered by a container component(Logic in JS).

Stateless Functional Components
When you separate a container component from a presentational component, the presentational component will always end up like this: one render() function, and no other properties.
If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as a JavaScript function!

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. 


Stateless Functional Components and Props
Stateless functional components usually have props passed to them.
To access these props, give your stateless functional component a parameter. This parameter will automatically be equal to the component’s props object.
It’s customary to name this parameter props
// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
  	let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
	let title = props.title;
  return <h1>{title}</h1>;
}


propTypes
propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they’re supposed to be doing. If props are missing, or if they’re present but they aren’t what you’re expecting, then a warning will print in the console.

This is useful, but reason #2 is arguably more useful: documentation.
Documenting props makes it easier to glance at a file and quickly understand the component class inside. When you have a lot of files, and you will, this can be a huge benefit.

Apply PropTypes
If a component class expects a prop, then you can give that component class a propType!
Notice that the value of propTypes is an object, not a function!
export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};
 Notice the difference in capitalization between the propTypes object and React.PropTypes!



React Forms
In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application.

Input onChange
A traditional form doesn’t update the server until a user hits “submit.” But you want to update the server any time a user enters or deletes any character.
Write an Input Event Handler


Controlled vs Uncontrolled
An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

let input = document.querySelector('input[type="text"]');
let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.

The important thing here is that the <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.
The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.
A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.
In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more ‘React’ way of doing things.

React Forms Recap
Notice that you didn’t use a submit button. You didn’t even use a <form> element! Your “form” was actually just an <input />.
That won’t always be the case. You will still sometimes want a <form> element and a submit button, especially if you need to differentiate between a finished form and an in-progress form. But in some cases, it’s fine to have a “form” that is really just an input field.
This is because, unlike in the traditional form paradigm, in React you re-send your form on every single character change. That removes the need to ever “submit” anything.


What's a Lifecycle Method?
Lifecycle methods are methods that get called at certain moments in a component’s life.
There are three categories of lifecycle methods: mounting, updating, and unmounting. 


Mounting Lifecycle Methods
A component “mounts” when it renders for the first time. This is when mounting lifecycle methods get called.

There are three mounting lifecycle methods:
componentWillMount
render
componentDidMount
When a component mounts, it automatically calls these three methods, in order.

componentWillMount
When a component renders for the first time, componentWillMount gets called right before render.

render
render is a lifecycle method!
Whenever a component mounts, componentWillMount is called first, followed by render, followed by componentDidMount

componentDidMount
When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading. 
If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.

Updating Lifecycle Methods
There are two categories that we haven’t yet discussed: updating and unmounting lifecycle methods.

What is updating?
The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.
There are five updating lifecycle methods:
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
Whenever a component instance updates, it automatically calls all five of these methods, in order.

componentWillReceiveProps
As one might expect, componentWillReceiveProps only gets called if the component will receive props:

// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
This is a common use of componentWillReceiveProps: comparing incoming props to current props or state, and deciding what to render based on that comparison.


shouldComponentUpdate
When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.
shouldComponentUpdate should return either true or false.
If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.
The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.
shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It’s typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do

componentWillUpdate
componentWillUpdate receives two arguments: nextProps and nextState
You cannot call this.setState from the body of componentWillUpdate
The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

componentDidUpdate
When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.
componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component’s props and state before the current updating period began. You can compare them to the current props and state.
componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It’s similar to componentWillUpdate in that way, except that it gets called after render instead of before.

componentWillUnmount
A component’s unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.
componntWillUnmount is the only unmounting lifecycle method!
componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.