# Typescript

Note: To run the associated code:   
>`tsc -w` for compiling the TS files incase tsconfig.json is present   
`npm run start` to start the lite server and render index.html in browser and see console   
`nodemon ./dist/<<filename.js>>` for viewing console logs in integrated terninal   

>`npm run dev` custom script to compile and run nodemon on app.js

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
disables all TS internal type checking
9. **undefined** #is also a valid type in TS
10. **Function** #used to  define function params and return type
11. **unknown**  #better type checking than `any` as explicit type checking is required
12. **never** #implicit return type when errors are thrown as they are never returned

## Forms of other types in TS
1. **Union Types** #combination of different core data types
2. **Literal Types** #specific version of your core types
3. **Type aliases**  

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

```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

You will be able to simplify code like below:
```typescript
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

```typescript
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

---

## Function In depth


`enum Role {ADMIN, READ_ONLY, AUTHOR};` Enum declaration

Function that does not return anything has by default return type of `void`

### Using function types

```typescript
let combineValues: (a: number, b: number) => number;
//combineValues can be assigned nay function that takes 2 numbers as argument and returns a number
```

```typescript
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });
```

---

## Next gen JS and TS

### Const and Let
- Both `const` and `let` are used to define variables that are block scoped   

`const` Used to define variables whose values do not change  
`let` Used to define block scope variables   
`var` Can either be of global scope or function scoped; thus prone to errors   

```javascript
var age = 29;

if (age > 15) {
  var isOld = false; //var is global scoped in If blocks and therefore let should be used as it is always block scoped
};

console.log(isOld); //false

```

### Arrow functions

```typescript
const add = (n1: number, n2: number) => n1 + n2;
//similar to
const add = (n1: number, n2: number) => {
  return n1 + n2;
}
```


```typescript
const printOutput: (a: number | string) => void = output => console.log(output);
```


### Default Functions
Where we assign default values to function parameters

```typescript
const add = (n1: number, n2: number = 3) => n1 + n2;
console.log(add(5)); //prints 8
```

```typescript
const add = (n1: number = 1, n2: number) => n1 + n2;
console.log(add(5)); //throws error as TS maps 5 to n1 and does not automatically find that n2 is the one to be assigned
```


### Spread Operator

Can be used to copy all the contents of an array or object using `....`

```typescript
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(hobbies); //error as connot push array of strings
activeHobbies.push(hobbies[0], hobbies[1]); //possible but cumbersome
activeHobbies.push(...hobbies);

```

### Rest parameters

```typescript
const add4 = (...numbers: number[]) => {
  return numbers.reduce((acc: number, num: number) => {
    return acc + num;
  });
} ;

const addedNums = add4(2,4,6,8); //20
```

```typescript
const human = {
  name: 'Max',
  age: 28
};

const newHuman = {...human};
console.log(newHuman); //{ name: 'Max', age: 28 }
```

### Array and Object Destructuring
Refers to the breaking down of elements in Arrays and Objects into individual elements

```typescript
const hobbies2 = ['Sports', 'Cooking'];

const [hobby1, hobby2] = hobbies2;
console.log(hobbies2, hobby1, hobby2); //[ 'Sports', 'Cooking' ] Sports Cooking
```

```typescript
const human2 = {
  name: 'Max',
  age: 28
};

const {name: newName, age: newAge} = human2;
console.log(newName, newAge, human2); //Max 28 { name: 'Max', age: 28 }
```

---

## Classes and Interface

### Classes

**Objects**   
- Actual things you work in the code.   
- are instances of classes
- class based creation is an alternative to object literals

**Class**
- Blueprints for Objects
- defines the methods and properties of the object
- allows creation of multiple objects easier


### Class Syntax

```typescript
class Department {
  name: string;

  constructor(n: string){
    this.name = n;
  }

  describe() {
    console.log('Department:' + this.name);
  }
}

const accounting = new Department('Accounting');
```

### Private and Public Access Modifiers
> Although typescript will highlight the below error during compilation but ignores it totally during runtime as JS does not support access modifiers

```typescript
class Department3 {
  public name: string; //if public not written by default it is public
  private employees: string[] = []; 

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department2) {
    console.log("Department2:" + this.name);
  }
}

const accounting3 = new Department3("Accounting");
accounting4.employees[2] = 'Richie'; //will throw error as employees is a private property
```

### Shorthand Initialization

```typescript
class Department5 {
  private id: string;
  name: string
  private employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  
  describe(this: Department5) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}
```
is equivalent to 

```typescript
class Department5 {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department5) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}
```

### Readonly property

the `readonly` property ensures that the property on the class on which it is defined is readonly and cannot be overwritten

```typescript
class Department6 {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  addEmployee(employee: string) {
    this.id = 'd2'; //will throw error as readonly
    this.employees.push(employee);
  }
}
```

### Inheritance

We use the `extend` keyword to inherit from a parent class.   
The subclass has access to the constructor of the parent class   
>`super()`   
is used inside the constructor to call the constructor of the parents class with the modified params
needs to be called first inside the constructor


```typescript
// class Department6 defined above

class ITDepartment2 extends Department6 {
  constructor(id: string, public admins: string[]){
    super(id, 'IT');
  }
}

const it = new ITDepartment2('id3', ['Max','Rich']);
```


### Overriding Properties & Protected Access Modifiers

`protected` modifier enables properties to be accessible from witin the class as well as the sub class

```typescript
lass Department7 {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class AccountingDepartment3 extends Department7{
  constructor(id: string, private reports: string[]){
    super(id, 'IT');
  }

  //overriding the method addEmployee from parent class
  addEmployee(name: string){
    if (name === 'Max'){
      return;
    }
     this.employees.push(name); //no error as employees is protected and not private
  }

}
```

### Getters and Setters

```typescript
class AccountingDepartment4 extends Department7 {
  private _lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this._lastReport = reports[0];
  }
  // getter
  get lastReport() {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error("No report found!");
  }
  //setter
  set lastReport(value: string)  {
    if(!value){
      throw new Error('Please pass valid value!');
    }
    this.addReport(value);
  }
  addReport(report: string) {
    this.reports.push(report);
    this._lastReport = report;
  }
}

const accDep4 = new AccountingDepartment4("id5", []);
accDep4.addReport("Something went wrong!");
console.log(accDep4.lastReport); //access the getter lastReport as a property not as a method

accDep4.lastReport = 'new report'; //using the setter to add new report
console.log(accDep4.lastReport);
```