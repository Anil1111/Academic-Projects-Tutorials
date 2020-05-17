# Typescript

## Features
- Is an object oriented programming language
- Additional to features including Static typing, classes and generics  on from JS
- Provides meta-programming features like Decorators
- Contains Types and is a superset of JS
- Writing valid JS is a valid Typescript but not vice versa
- Cannot run directly in browser
- extension is .ts
- Why Typescript ? 
  - With the advent of Server side programs in JS, it became complex and required OOPS implementation
  - Has a powerful compiler that compiles TS into cleaner JS Code.
  - The compiled JS is also compatible with older browsers as TS handles that automatically
- Rich configuration options


## Advantages over JS
- Highlights errors at compilation time whereas JS is an interpreted language
- Static Typing or Strongly Typed as compared to dynamic types (types resolved during runtime)
- supports intellisense

## Disadvantages
- Longer compilation time as additional step of compiling into JS required by TS as cannot be directly run on browser
- Not supports abstract classes
- TS support is not available during runtime as it is compiled into JS

## Data Types in TS
1. **number**  no distinction between floats, integers and negative integers
2. **string**
3. **boolean**

### Issues in JS
```javascript
function(num1, num2) {
  return num1+num2;
};
console.log('2'+'3'); //Output is 23 in JS which is a logical error; such errors can be caught by TS
```

### Typescript code snippet
```typescript
var input1 = document.getElementById("num1")! as HTMLInputElement;
```
> `!` here tells TS this element will always be an element   
`as HTMLInputElement` tells TS explicitly that it is an HTMLInput element

```typescript
const number1 = 2.8;
const number2: number = 7;
const number3: number;
const printResult = true;
```
> Typescript uses type inference to determine the type of the variable  
We can alternatively explicitly mention the type in TS but is not recommended. However, if the value is not explicitly mention then it is recommended to add the type


