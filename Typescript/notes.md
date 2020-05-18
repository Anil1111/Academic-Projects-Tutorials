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
1. **number**  #no distinction between floats, integers and negative integers
2. **string**
3. **boolean**
4. **object**
5. **Array** #can be flexible or  strict
- below ones are not available in JS
6. **tuple** #fixed length array with fixed types
7. **enum** #global constants numbers for which you apply labels
8. **any** #takes any type
- **undefined** is also a valid type in TS

## Forms of other types in TS
1. **Union Types** #combination of different core data types
2. **Literal Types** #specific version of your core types
3. **Types aliases**  

---
## TS Code

### Configuration

- For running nodemon of js on automatic complilation of ts files

`npm run dev` #run below script from terminal

```json
"scripts" : {
    "compile": "tsc && node app.js",
    "dev": "nodemon -e ts  --exec \"npm run compile\""
}
```


### Issues in JS
```javascript
function(num1, num2) {
  return num1+num2;
};
console.log('2'+'3'); //Output is 23 in JS which is a logical error; such errors can be caught by TS
```

### Using data types of number, string and boolean
```typescript
var input1 = document.getElementById("num1")! as HTMLInputElement;
```
> `!` here tells TS this element will always be an element   
`as HTMLInputElement` tells TS explicitly that it is an HTMLInput element

```typescript
const number1 = 2.8; //type infered implicitly
const number2: number = 7; //Not recommended
const number3: number;
let printResult = true;
let printResult = 'abc' //will throw error as printResult - Boolean type
```
> Typescript uses type inference to determine the type of the variable  
We can alternatively explicitly mention the type in TS but is not recommended. However, if the value is not explicitly mention then it is recommended to add the type


### Typescript representation of objects

```typescript
const person2: {
  name: string,
  age: number
} = {
  name: "max",  
  age: 40,
};
```

### Typescript representation for nested objects.

Let's say you have this JavaScript object:

```typescript
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```

This would be the type of such an object:

```typescript
{
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}
```

### Type aliases abd Object Types

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```javascript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

You will be able to simplify code like below:
```javascript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

```javascript
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

---

## Function In depth

### 


---





