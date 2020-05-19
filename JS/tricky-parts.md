## Difference between == and ===

`=` is used for assigning values to a variable in JavaScript.   
`==` is used for comparison between two variables irrespective of the datatype of variable.   
`===` is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.   

` 100==100` means both are int values and the other condition, `100 == "100"` means int comparison with "100" string type of variable still returns true. It means == is not doing a strict type check.

  It returns true for 100 === 100 and it returns false for 100 === "100". It means === does a strict check for comparison. It checks datatype also and does a comparison based on it.

  ---

  ## This in JS

  this refers to the object that is executing the current function

  1. If `this` is called from a method on an object, refers to the object.

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

  2. If `this` is called on a regular function(not part of an object ), refers to the global object (window - browsers; global - node)

```javascript
  function playVideo(){
    console.log(this); //refers to the global object
  }

  playVideo();
```

- Constructor functions

```javascript
  function Video(title){
    this.title = title;
    console.log(this);
  }

  const v = new Video(); //this will refer to a new {} empty object of Video
```

- Inner function
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