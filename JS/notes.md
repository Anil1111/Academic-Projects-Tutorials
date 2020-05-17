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