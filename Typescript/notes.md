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

## Classes

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
> We can inherit from only one class

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

### Static Method and Properties

Declaring a method or property as `static` allows them to be accessible on the class itself and does not require to be called on the instantiated object

```typescript
class Department8 {
  public static fiscalyear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    console.log(this.fiscalyear); //error
    console.log(Department8.fiscalyear);  //use this
  }
  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = Department8.createEmployee("Rich");
console.log(employee1, Department8.fiscalyear);
```

### Abstract Classes

- Any class that has an abstract method must be an abstract class   
- Absstract methods are used when you want each subclass to have that specific method but have different implementation of it. Thus all subclasses inheriting an abstract method must have concrete implementation
- **asbtract methods must contain no implementation**   
- Their can also be abstract properties.
- **abstract classes cannot be instantiated but only inhertited**

```typescript
abstract class Department9 {
  abstract protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  
  abstract describe(): void; //no implementation
}

class ITDepartment9 extends Department9 {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
    //subclass must implement the abstract method
  describe(){
    console.log('IT department' + this.id);
  }
}

```


### Singletons and Private Constructors

Implementing a singleton class (class that has only one object) requires implementing of Private constructors as creation of objects cannot be allowed outside the class

```typescript
class AccountingDepartment5 extends Department7 {
  private static instance: AccountingDepartment5;

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }
  //will only declare the AccountingDepartment5 object once and every other time it will return its instance
  static getInstance(){
    if (AccountingDepartment5.instance){
      return AccountingDepartment5.instance;
    }
    this.instance = new AccountingDepartment5('id5', []);
    return this.instance;
  }
}

// const accDep5 = new AccountingDepartment5("id5", []); //error as constructor is private
const accDep5 = AccountingDepartment5.getInstance();
const accDep6 = AccountingDepartment5.getInstance();
console.log(accDep5, accDep6); // both will be same as only singleton pattern causes only object to be created
```

---

## Interface

### Why required ?
To ensure that each class that implements the interface will have a specific functionality (implement the methods and have the properties defined)   
_Vanilla JS does not support interfaces as it is only a TS feature and therefore compiled JS will convert it into functions and classes_


### Syntax
- Describes how the strcuture of an object
- Can be used to typecheck objects that should have a specific structure
 - Will have no assignements on properties and no implememntation on methods 
- A class can implement multiple interfaces using the `implements` keyword
- Doesnt allow public, private, static and so on except `readonly`
- Interfaces cant be instantiated

```typescript
interface Person { //no implementation at all
  name: string;
  age: number;
  greet(phrase: string): void; 
}

let user: Person; //using interface to create an object
user = {
  name: 'Rich',
  age: 23,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user.greet('Hi i am - ');
```

### Comparison with custom types

Can be used interchangeably with custom types. However, interfaces are specific for defining the structure of properties.

```typescript
type Person {
  name: string;
  age: number;
  greet(phrase: string): void; 
}
```


### Interface with classes
- it can be used as a contract that is implemented by the class
- all properties and methods of the interface needs to be implemented by the class that implements the interface

```typescript
interface Greetable {
  name: string,
  greet(phrase: string): void;
}

class NewPerson implements Greetable {
  constructor(public name: string, public age: number){
  }
  greet(phrase: string){
    console.log(phrase + ' ' + this.name);
  }
}

let greetUser: Greetable; //this type declaration enables greeUser to always the have the greet method
greetUser = new NewPerson('Rich', 28); // as greetUser is of type Greetable that has been implemented by NewPerson
greetUser.greet('Hi i am - ');
console.log(greetUser);
```

### Difference with Abstract Classes
- Abstract classes may contain methods with implementation along with abstract classes, whereas Interface does not have any implementation at all throughout.

### Extending Interface - Inheritance
- an interface can extend multiple interfaces, but classes can only extend one class

1. It is possible to implement several interfaces

```typescript
interface Named3 {
  readonly name: string
}
interface Greetable3 {
  greet(phrase: string): void;
}

class NewPerson3 implements Greetable3, Named3 {
  constructor(public name: string, public age: number){
  }
  greet(phrase: string){
    console.log(phrase + ' ' + this.name);
  }
}
```

2. It is possible to extend an interface into one and then implement the combined interface

```typescript
interface Named4 {
  readonly name: string
}
interface Greetable4 extends Named4{
  greet(phrase: string): void;
}

class NewPerson4 implements Greetable4 {
  constructor(public name: string, public age: number){
  }
  greet(phrase: string){
    console.log(phrase + ' ' + this.name);
  }
}
```

3. It is possible to extend several interfaces

```typescript
interface Named4 {
  readonly name: string
}
interface AnotherInterface {
  readonly age: number
}
interface YetAnotherInterface {
  readonly address: string
}

interface Greetable4 extends Named4, AnotherInterface, YetAnotherInterface{
  greet(phrase: string): void;
}

```

### Interface as Function Types
- Can be used instead of custom types in the form of function types

```typescript
interface AddFn2 {
  (a: number, b: number): number;
}

let add6: AddFn2;
add6 = (a: number, b:number) =>{
    return a+b;
}

console.log(add6(8,8)); //return 16
```

### Optional Properties and Methods
- using the operator `?` we can make a property or method optional

```typescript
interface Named5 {
  readonly name?: string;
  outputName?: string; //optional porperty
}

interface Greetable5 extends Named5 {
  greet?(phrase: string): void; //myMethod ?() {}
}
```

---

## Super Advanced Types


### Intersection Types

1. Intersection types on objects is the combination of the properties

```typescript
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee; //intersection types - combination of object properties
const emp1: ElevatedEmployee = {
  name: "Rich",
  privileges: ["create-server"],
  startDate: new Date(),
};
```

2. Intersection types on union types is the intersection of those types

```typescript
type Combinable2 = string | number;
type Numeric = number | boolean;
type Universal = Combinable2 & Numeric; //intersection of the two union types - type number (the only intersecting type)
```


### Type Guards
- helps with the union types
- presents the approach required to check if a property or method exists before using them


1. For normal Union types
- Use the `typeof` method

```typescript
type Combinable3 = string | number;

function add8(a: Combinable3, b: Combinable3) {
  if(typeof a === 'string' || typeof b === 'string'){ //type guard using typeof
    return a.toString() + b.toString();
  }
  return a + b;
}

```

2. For objects
- use the `property in object`

```typescript
const emp2: ElevatedEmployee = {
  name: "Rich",
  privileges: ["create-server"],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) { //JS code to check if property privileges exists on the object emp; type guards
    console.log('Privilege ' + emp.privileges);
  }
  if ('startDate' in emp) { 
    console.log('StartDate ' + emp.startDate);
  }
}

```

3. For classes
- uses either the `property in object` or `instanceof` method

```typescript
class Car {
  drive() {
    console.log('Driving a car');
  }  
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }
  loadCargo(amount: number){
    console.log('loading cargo..'+ amount);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle){
  vehicle.drive();
  if('loadCargo' in vehicle){
    vehicle.loadCargo(2000);
  }
}

```

```typescript
function useVehicle2(vehicle: Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck){
    vehicle.loadCargo(4000);
  }
}

```

### Discriminated Union
Requires the interfaces/classes to have one common property that describes the object uniquely, and we use this property in our check:

```typescript
interface Bird2{
  type: 'bird'; //assigning literal type of only 'horse' to type
  flyingSpeed: number;
}
interface Horse2{
  type: 'horse'
  runningSpeed: number; 
}

type Animal2 = Bird2 | Horse2;
function moveAnimal2(animal: Animal2){
  let speed;
  switch(animal.type) { //switch used to choose between the correct type
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving speed is:' + speed);
}
```

### Typecasting
Escpecially dont to ensure proper DOM manipulations

1. Without typecasting

```typescript
const para = document.querySelector('p'); //type is HTMLParagraphElement or Null
const para2 = document.getElementById('message-output'); //type is HTMLElement or NUll
const userInputElement = document.getElementById('user-input')!; //type is HTMLElement or NUll
//the ! symbol tells typescript that we are sure that an element like this exists in the DOM and wont yield null

userInputElement.value = 'Hi-there'; //value property will give an error as the generic HTMLElement type does not have specific properties like value

```

2. With Typecasting

- Method 1
```typescript
const userInputElement2 = <HTMLInputElement> document.getElementById('user-input'); //typecasting with HTMLInputElement
userInputElement2.value = 'Hi-there'; //no error
```

- Method 2
```typescript
const userInputElement3 = document.getElementById('user-input') as HTMLInputElement; //typecasting with HTMLInputElement
userInputElement3.value = 'Hi-there'! //no error 
```

- Method 3 with no need of `!`
```typescript
const userInputElement4 = document.getElementById('user-input'); 

if(userInputElement4){ //use if as a replacement to '!'
  (userInputElement4 as HTMLInputElement).value = 'Hi-there'! 
} 
```

### Index Properties

> **Index Types**   
Are types that are declared using the `[]` symbol, and are used to declare objects for which we do not know the number of properties nor the name of the properties it will hold.   
We only know the type that the key will be and the type of the value   
The prop can only be string, number or symbols but not anyhting else

```typescript
interface ErrorContainer {
  // id: string; //can have pre-defined properties but cannot be of type number as prop below is declared to be of type string
  //syntax: [nameOfProp: typeOfPropName]: typeOfPropValueReturned
  [prop: string]: string; 
}

//below object can hold n number of errors 
const errorBag: ErrorContainer = {
  // email: 1 //will not accept nos
  // 1: 'not valid email' //will be valid as 1 can be interpreted as string but not vice versa
  email: 'not a valid email!',
  username: 'must start with capital char!'
}; 

```


### Function overloads

```typescript
//overloading the add10 function so that all return types are understood by TS
function add10(a: number, b: number): number;
function add10(a: string, b: string): string;
function add10(a: string, b: number): string;
function add10(a: number, b: string): string;
function add10(a: Combinable4, b: Combinable4) {
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString();
  }
  return a + b;
};

const result11 = add10('Rich', 'Abraham');
result11.split(''); //no error even without typecasting as TS knows output is string
//but
const result12 = add10(5,6);
result12.split(''); //error as TS now knows that it will return number
```


### Optional Chaining

```typescript
const fetchedUserData2 = {
  id: '1',
  name: 'Rich',
  job: { title: 'CEO', description: ' My company'}
};

```

What if the job property is the result of an API Call, then TS is not sure whether we will get the job property, then we use optional chaining cause if data is not present then TS will show error


1. JS way of handling optional chaining
```javascript
console.log(fetchedUserData2.job.title); //will give error as we are not sure job property will  be ther ein JSON response
console.log(fetchedUserData2.job && fetchedUserData2.job.title); //will work as JS uses chaining to handle this 

```

2. TS way of handling optional chaining
```typescript
//the below syntax ensure that job is checked only if fetchedUserData3 exists; title is checked only if job exists
console.log(fetchedUserData2.job?.title);
```

### Nullish Coalescing
To work with data that you are not sure whether it is null, undefined or valid   
We use the Nullish Coalescing operator `??`

>If input is `null` or `undefined` then below example is set to 'DEFAULT'   
If input is valid or `''` empty, then it is of value ''

```typescript
const userInput5 = '';
const storedData5 = userInput4 ?? 'DEFAULT'; //prints empty string
console.log(storedData5); //for empty val, it incorrectly makes its type 'DEFAULT'
```

---

## Generics
Gives us fleibility combined with type safety

Examples of generic usage:
1. Array<string> or string[]
2. Promise<string>

**Generic Type**
is a type which is connected with another type and is flexible regarding which type the other type is
Eg: Array type does not care what type of data is inside it, but just requires some information on the type


### Generic Function

Issue without using generic function
```typescript
function merge(objA: Object, objB: Object) {
  return Object.assign(objA, objB);
} 

const mergedObj = merge({name: 'Rich'}, {age: 20} );
mergedObj.name; //error as TS only knows merge returns an object
```


One way to solve the error is by typecasting the mergedObj or telling TS that both objects will return different types using Generic Function and the result will be an intersection of those types

```typescript
function merge2<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj2 = merge2({name: 'Rich'}, {age: 20} );
console.log(mergedObj2.name); //name is now available 
```

Types are set dynamically and we can reuse merge2 as it takes any 2 objects as argument
```typescript
function merge3<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj3 = merge2({name: 'Rich', hobbies: ['Sports'] }, {age: 20} );

//not necessary to provide the return type as TS automatically infers 
const mergedObj4 = merge2<{name: string, hobbies: string[]}, {age: number}>({name: 'Rich', hobbies: ['Sports'] }, {age: 20} );
```


### Constraints in Generic Functions

Issue
```typescript
const mergedObj5 = merge2({name: 'Rich', hobbies: ['Sports'] }, 30 );
console.log(mergedObj5); //does not show 30 as it is not an object
```

Constrained using extends keyword
```typescript
function merge4<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
 const mergedObj6 = merge4({name: 'Rich', hobbies: ['Sports'] }, 30 );
//we get an error as now we extended T and U to be an object and therefore it has to be an object

```

### Another type of Generic Function

```typescript
interface Lengthy {
  length: number;
};

//we can use the string type or a union type but we want T to be flexible; the only constraint is that it should have a length property
function countAndPrint<T extends Lengthy>(element: T){
  let descriptionText = 'Got no value';
  if (element.length === 1){
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element`;
  } 
  return [element, descriptionText];
};

console.log(countAndPrint('HI there!'));
console.log( countAndPrint(['Sports', 'Cooking' ]));
console.log( countAndPrint([]));
console.log( countAndPrint(10)); //error as type number
```


### keyOf Constraint

Using `keyof` property to find use the key of an object

Issue
```typescript
function extractAndConvert(obj: Object, key: string){
     return 'Value of' + obj[key];  //error as TS does not infer that key of the object will return a value or not
}
console.log(extractAndConvert({}, 'name')); //Value of undefined
```

Solution
```typescript
function extractAndConvert2<T extends object, U extends keyof T>(obj: T, key: U){
   return 'Value of ' + obj[key];  //no error
}
console.log(extractAndConvert2({name: 'Rich'}, 'name')); //Value of Rich 
 ```


 ### Generic Classes

```typescript
//adding constraint: extends string and number to provide typesafety and flexibility at the same time
class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return; //guard to ensure that if object are provided, then last element of array is not removed everytime
    } else {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
const numbStorage = new DataStorage<number>();

```


### Generic Utility Types

Available only for typescript [Typescript Utilities](https://www.typescriptlang.org/docs/handbook/utility-types.html)
These types are only present in TS, and provides higher type safety

1. Partial Type
Partial is a type that is also of object type but wraps itself on CourseGoal and makes its properties optional and therefore can be assigned {} and will ultimately return type of courseGoal   
Partial can be used in cases where you want to temporarily make all the properties of an interface optional

```typescript
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
```

2. Readonly Type
can be used on an object too

```typescript
const names: Readonly<string[]> = ['Rich', 'Anna'];
names.push('Manu'); //notallowed
names.pop(); //not allowed
```


### Generic Types vs Union Types

If we rewrite datastorage as union type:
With Union we say that we can have a mix of the given types but with T extends types, we say that only that type can be used
Generics are used to lock the types used in methods whereas union types provide flexibility

---

## Decorators

Used for Meta-Programming   
Exposes tools to other developers which uses ut for writing better utilities code by developers but has little impact on end users ie decorators needs to added on classes explicitly


### Sample Decorator
Decorators are denoted by: `@pointAtAFunction` 
_Logger gets executed when the class is defined itself right at start not when it is instantiated_

Decorator Function: When a decorator is placed on a class, it takes the constructor as its argument 
```typescript
function Logger(constructor: Function) {
  console.log('Loggin.....');
  console.log(constructor); //[Function: Pers]
}
```

```typescript
@Logger
class Pers {
  name = 'Rich';
  constructor(){
    console.log('Creating person object..');
  }
}

const pers = new Pers();
console.log(pers); //Pers2 { name: 'Rich' }
```


### Decorator Factory
By creating functions
Allows us to pass params to the Decorator that return an inner functions

```typescript
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger2('LOGGING - PERSON')
class Pers2 {
  name = 'Rich';

  constructor(){
    console.log('Creating person object..');
  }
}

```

### Other Decorator Functions

```typescript
function WithTemplate2(template: string, hookId: string) {
return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); //creating a new object with the constructor
    if (hookEl){
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
  
}

@WithTemplate2('<h1>New person</h1>', 'app') //renders on browser
class Pers4 {
  name = 'Rich';
  constructor(){
    console.log('Creating person object..');
  }
}

const pers4 = new Pers4();
console.log(Pers4);
```