#JavaScript

## Features
- ECMA Script is the standard, and JS is the implementation.
- JS is a loosely typed language.


## Types in JS
There are 8 basic data types in JavaScript.

1. **number** for numbers of any kind: integer or floating-point, integers are limited by ±253.
1. **bigint** is for integer numbers of arbitrary length.
1. **string** for strings. A string may have one or more characters, there’s no separate single-character type.
1. **boolean** for true/false.
1. **null** for unknown values – a standalone type that has a single value null.
1. **undefined** for unassigned values – a standalone type that has a single value undefined.
1. **object** for more complex data structures.
1. **symbol** for unique identifiers.

The `typeof` operator allows us to see which type is stored in a variable.

- Two forms: `typeof x` or `typeof(x)`.  
Returns a string with the name of the type, like "string".
- For `null` returns "object" – this is an error in the language, it’s not actually an object.


## Comparison Operators

`==` equal to  
> `x == "5"`	true  
`x == 5`	true

`===` equal to and equal type  
> `x === "5"`	false  
`x === 5`	true

`!=` not equal to  
> `x != 8` true   
`x != "5"` false

`!==` not equal to and not equal to type  
> `x !== "5" `true  
`x !== 5` false


## JS Global Functions

1. `eval()` 	Evaluates a string and executes it as if it was script code
- eval(string)

```javascript
  var x = 10;
  var y = 20;
  var a = eval("x * y"); //200
  var b = eval("2 + 2"); //4
  var c = eval("x + 17"); //27
```

2. `isFinite()` 	Determines whether a value is a finite, legal number

```javascript
  var a = isFinite(123); //true
  var b = isFinite(-1.23); //true
  var c = isFinite(5-2); //true
  var d = isFinite(0); //true
  var e = isFinite("123"); //true
  var f = isFinite("Hello"); //false
  var g = isFinite("2005/12/12"); //false
```

3. `isNaN()` 	Determines whether a value is an illegal number

```javascript
  isNaN(123) //false
  isNaN(-1.23) //false
  isNaN(5-2) //false
  isNaN(0) //false
  isNaN('123') //false
  isNaN('Hello') //true
  isNaN('2005/12/12') //true
  isNaN('') //false
  isNaN(true) //false
  isNaN(undefined) //true
  isNaN('NaN') //true
  isNaN(NaN) //true
  isNaN(0 / 0) //true
```
4. `Number()` 	Converts an object's value to a number

```javascript
  var x1 = true;
  var x2 = false;
  var x3 = new Date();
  var x4 = "999";
  var x5 = "999 888";

  var n = Number(x1) +  Number(x2) +  Number(x3) +  Number(x4) +  Number(x5);
  // 1 0 1589797480942 999 NaN
```

5. `parseFloat()` Parses a string and returns a floating point number

```javascript
var a = parseFloat("10") //10
var b = parseFloat("10.00") //10
var c = parseFloat("10.33") //10.33
var d = parseFloat("34 45 66") //34
var e = parseFloat(" 60 ") //60
var f = parseFloat("40 years") //40
var g = parseFloat("He was 40") //NaN
```

6. `parseInt()` 	Parses a string and returns an integer

The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

- If the string begins with "0x", the radix is 16 (hexadecimal)  
- If the string begins with "0", the radix is 8 (octal). This feature is deprecated  
- If the string begins with any other value, the radix is 10 (decimal)  

Note: Only the first number in the string is returned!  
Note: Leading and trailing spaces are allowed.  
Note: If the first character cannot be converted to a number, parseInt() returns NaN.  

```javascript
var a = parseInt("10") ; //10
var b = parseInt("10.00") ; //10
var c = parseInt("10.33") ; //10
var d = parseInt("34 45 66") ; //34
var e = parseInt(" 60 ") ; //60
var f = parseInt("40 years") ; //40
var g = parseInt("He was 40") ; //NaN

var h = parseInt("10", 10); //10
var i = parseInt("010"); //10
var j = parseInt("10", 8); //8
var k = parseInt("0x10"); //16
var l = parseInt("10", 16); //16
```

7. `string()` 	Converts an object's value to a string
- similar to toString()

```javascript
var x1 = Boolean(0);
var x2 = Boolean(1);
var x3 = new Date();
var x4 = "12345";
var x5 = 12345;

var res =
String(x1) +String(x2) +String(x3) +String(x4) +String(x5);
// false true  Mon May 18 2020 16:05:48 GMT+0530 (India Standard Time) 12345 12345
```


## Difference between null and undefined
The value null is written with a literal: `null`. null is not an identifier for a property of the global object, like undefined can be. Instead, null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 

This contrasts null from the similar primitive value undefined , which is an unintentional absence of any object value.That is because a variable that has been declared but not assigned any value is `undefined`, not `null`.



```javascript
// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined

// foo is known to exist now but it has no type or value:
var foo = null; 
foo; //null
```

```javascript
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```


## ==null and != null

[Source](http://adripofjavascript.com/blog/drips/equals-equals-null-in-javascript.html "Link to a drip of JS")

```javascript
var ethos = {
    achilles: "glory",
    aeneas: "duty",
    hades: null // Beyond human understanding
};

function printEthos (name) {
    console.log(ethos[name]);
}

// Outputs: "glory"
printEthos("achilles");

// Outputs: "null"
printEthos("hades");

// Outputs: "undefined"
printEthos("thor");
```

We can improve above by
```javascript
function printEthos (name) {
    if (ethos[name]) {
        console.log(ethos[name]);
    } else {
        console.log(name + " has no recorded ethos.");
    }
}

// Outputs: "hades has no recorded ethos."
printEthos("hades");

// Outputs: "thor has no recorded ethos."
printEthos("thor");
```

Consider what happens in the case of Pythagoras.
```javascript
ethos.pythagoras = 0; // The sublimity of Number

// Outputs: "pythagoras has no recorded ethos"
printEthos("pythagoras");
//Because 0 is a falsy value, "pythagoras" isn't recognized as having an ethos.
```

So we need something that won't accidentally catch falsy values when we really just want to catch nothingness as opposed to somethingness. And that's what == null does.
```javascript
function printEthos (name) {
    if (ethos[name] != null) { //null == undefined
        console.log(ethos[name]);
    } else {
        console.log(name + " has no recorded ethos.");
    }
}

// Outputs: "hades has no recorded ethos."
printEthos("hades");

// Outputs: "thor has no recorded ethos."
printEthos("thor");

// Outputs: 0
printEthos("pythagoras");
```

**Despite the fact that null is a falsy value (i.e. it evaluates to false if coerced to a boolean), it isn't considered loosely equal to any of the other falsy values in JavaScript. In fact, the only values that null is loosely equal to are undefined and itself.**

Because of this interesting property, it has become somewhat conventional to use == null and != as a more concise way of checking whether a given value is "nothing" (null/undefined) or "something" (anything else).