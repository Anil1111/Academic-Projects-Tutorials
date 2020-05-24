# JS using HTML

Linking code is preferable because of a programming concept called **Separation of Concerns (SoC)**. Instead of having messy code that is all in the same file, web developers separate their code into different files, making each “concern” easier to understand and more convenient when changes must be made.
`<script src="./exampleScript.js"></script> `: towards the end of the Body tag

A **CDN (Content Delivery Network)** is a group of servers spread out over many locations. These servers store duplicate copies of data so that servers can fulfill data requests based on which servers are closest to the respective end-users. CDNs make for fast service less affected by high traffic.

The HTML parser does NOT process the next element in the HTML file until it loads and executes the` <script>` element, thus leading to a delay in load time and resulting in a poor user experience.   
Additionally, scripts are loaded sequentially, so if one script depends on another script, they should be placed in that very order inside the HTML file.

## DEFER
When a script contains functionality that requires interaction with the DOM, the defer attribute is the way to go.
`<script src="example.js" defer></script>`

## ASYNC
The async attribute loads and executes the script asynchronously with the rest of the webpage.the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the async attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded
`<script src="example.js" async></script>`   
**async** is useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time.

## DOM
The Document Object Model, abbreviated DOM, is a powerful tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page.   
In the DOM tree, the top-most node is called the root node, and it represents the HTML document. The descendants of the root node are the HTML tags in the document, starting with the `<html>` tag followed by the `<head>` and `<body>` tags and so on.   
A parent node is the closest connected node to another node in the direction towards the root.   
The DOM is an interface between scripting languages and a web page’s structure. 

Much like an element in an HTML page, the DOM allows us to access a node’s attributes, such as its class, id, and inline style.
DOM Nodes of type Element provide access to attributes of those elements declared in HTML markup. For instance, if an HTML tag has attributes like id or class or src, those attributes can be accessed through the DOM.

The document object in JavaScript is the door to the DOM structure. The document allows you to access the root node of the DOM tree.

```javascript
document.body.innerHTML = 'The cat loves the dog.';  
document.body.innerHTML = '<h2>This is a heading</h2>';
```

The `.querySelector()` method allows us to specify a CSS selector and then returns the first element that matches that selector. The following code would return the first paragraph in the document.
>`document.querySelector('p');`

>`document.getElementById('bio').innerHTML = 'The description';`

```javascript
let blueElement = document.querySelector('.blue'); 
blueElement.style.backgroundColor = 'blue';
document.querySelector('.blue').style.fontFamily = 'Roboto';
```

>Unlike CSS, the DOM style property does not implement a hyphen such as `background-color`, but rather _camel case_ notation `backgroundColor`

## CREATING AND INSERTING elements
In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM. We call this process appending. The `.appendChild()` method will add a child element as the last child node.
```javascript
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
document.body.appendChild(paragraph);
document.body.removeChild(paragraph);
document.getElementById('sign').hidden = true;
```
### Node.appendChild()
The `Node.appendChild()` method adds a node to the end of the list of children of a specified parent node   
If the given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).

```javascript
let aBlock = document.createElement('block').appendChild( document.createElement('b') );
```
### Document.importNode()

The Document object's importNode() method creates a copy of a Node or DocumentFragment from another document, to be inserted into the current document later.

To include it, you need to call an insertion method such as `appendChild()` or `insertBefore()` with a node that is currently in the document tree.


```javascript 
//const importedNode = document.importNode(externalNode [, deep]);
const importedNode = document.importNode(externalNode, true);
```

_externalNode_ - The external Node or DocumentFragment to import into the current document.   
_deep_ -     
- If deep is set to `true`, then externalNode and all of its descendants are copied.    
- If deep is set to `false`, then only externalNode is imported — the new node has no children.

```javascript
const iframe  = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

### ParentNode.firstElementChild
The `ParentNode.firstElementChild` read-only propertvy returns the object's first child Element, or null if there are no child elements.

### Element.insertAdjacentElement()
The `insertAdjacentElement()` method of the Element interface inserts a given element node at a given position…relative to the element it is invoked upon.

```javascript
targetElement.insertAdjacentElement(position, element);
```
_Position_   
A DOMString representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:   
'`beforebegin`': Before the targetElement itself.   
'`afterbegin`': Just inside the targetElement, before its first child.   
'`beforeend`': Just inside the targetElement, after its last child.   
'`afterend`': After the targetElement itself.   

## ONCLICK EVENT
You can add interactivity to DOM elements by assigning a function to run based on an event.

```javascript
let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };
```

## TRAVERSING
Each DOM element node has a `.parentNode` and `.children` property. The property will return a list of the element’s children and return null if the element has no children.
The `.firstChild` property will grant access to the first child of that parent element.
```javascript
const first = document.body.firstChild;
first.innerHTML = 'I am the child!';
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';
```

---

## EVENT HANDLER function

```javascript
let eventTarget = document.getElementById('targetElement');

eventTarget.onclick = function() {
  // Then we created the event handler property which consists of the event target followed by the event name (the prefix on- and the event type.) In this example, we’re using the click event which fires when the user presses and releases a mouse button on a DOM element.
}
```

It’s best practice to create named event handler functions, instead of anonymous functions. Your code will remain organized and reusable this way
```javascript
let eventHandlerFunction = function() {
  // this block of code will run
}
eventTarget.onclick = eventHandlerFunction;
```

The `.addEventListener()` method is another common syntax for registering event handlers. An event listener waits for a specific event to occur and calls a named event handler function to respond to it

```javascript
eventTarget.addEventListener('click', eventHandlerFunction);
eventTarget.removeEventListener('click', eventHandlerFunction);
```

## EVENT Object
- the `.target` property to access the element that triggered the event.
- the `.type` property to access the name of the event.
- the `.timeStamp` property to access the number of milliseconds that passed since the document loaded and the event was triggered.

```javascript
let sharePhoto = function(event) {
  event.target.style.display = 'none';  ** Everthing should be in ''
  text.innerHTML = 'You share the puppy in ' + event.timeStamp + ' ms.';
}

share.onclick = sharePhoto;
mysteryButton.onwheel = colorChange; #execute on sliding mouse wheel
```

## EVENT Types:
For instance, the load event fires after website files completely load in the browser.
- The `mousedown` event is fired when the user presses a mouse button down
- The `mouseup` event is fired when the user releases the mouse button
- The `mouseover` event is fired when the mouse enters the content of an element.
- The `mouseout` event is fired when the mouse leaves an element.


>itemOne.onmouseover & onkeydown   
itemTwo.onmouseup & onkeyup   
itemThree.onmouseout & onkeypressed   
itemFour.onmousedown    


---

## HANDLEBARS.js

A library is a collection of code that is already written that makes development easier. In the case of Handlebars, you are provided a templating engine which allows you to generate reusable HTML with JavaScript. Another benefit is that Handlebars keeps a clear separation of when you’re writing HTML or JavaScript.

---




