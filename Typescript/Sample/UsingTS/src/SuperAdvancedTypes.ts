console.log("---------------- Intersection Types-------------------------");

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

type Combinable2 = string | number;
type Numeric = number | boolean;
type Universal = Combinable2 & Numeric; //intersection of the two union types - type number (the only intersecting type)

// using interface

interface Admin2 {
  name: string;
  privileges: string[];
}
interface Employee2 {
  name: string;
  startDate: Date;
}
interface ElevatedEmployee2 extends Admin2, Employee2 {}

console.log("---------------- Type Guards-------------------------");

// type guard on union types
type Combinable3 = string | number;

function add8(a: Combinable3, b: Combinable3) {
  if(typeof a === 'string' || typeof b === 'string'){ //type guard using typeof
    return a.toString() + b.toString();
  }
  return a + b;
}


// type guards on objects

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

printEmployeeInformation(emp2);
printEmployeeInformation({
  name: 'Rich',
  privileges: ['admin']
});

// type guard on classes

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

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
  vehicle.drive();
  if('loadCargo' in vehicle){
    vehicle.loadCargo(2000);
  }
}

useVehicle(v1);
useVehicle(v2);

//or else

function useVehicle2(vehicle: Vehicle){
  vehicle.drive();
  if(vehicle instanceof Truck){
    vehicle.loadCargo(4000);
  }
}

useVehicle2(v1);
useVehicle2(v2);

console.log("---------------- Discriminated Union-------------------------");

interface Bird{
  flyingSpeed: number;
}
interface Horse{
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
  if('flyingSpeed' in animal){ //cannot use instanceof as working with interfaces as it does not get compiled into JS(no support)
    console.log('Moving with speed' + animal.flyingSpeed);
  }
}
moveAnimal({  flyingSpeed: 340});

// using discriminated union

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
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving speed is:' + speed);
}
moveAnimal2({  type: 'bird', flyingSpeed: 340});



console.log("---------------- Type Casting-------------------------");

/* Can only be viewed in HTML Console as DOM Statements */

/* 
const para = document.querySelector('p'); //type is HTMLParagraphElement or Null
const para2 = document.getElementById('message-output'); //type is HTMLElement or NUll
const userInputElement = document.getElementById('user-input')!; //type is HTMLElement or NUll
//the ! symbol tells typescript that we are sure that an element like this exists in the DOM and wont yield null

// userInputElement.value = 'Hi-there'; //value property will give an error as the generic HTMLElement type does not have specific properties like value

const userInputElement2 = <HTMLInputElement> document.getElementById('user-input'); //typecasting with HTMLInputElement
userInputElement2.value = 'Hi-there'; //no error

//alternative method 
const userInputElement3 = document.getElementById('user-input') as HTMLInputElement; //typecasting with HTMLInputElement
userInputElement3.value = 'Hi-there'! //no error 

//another method if you do not wish to use '!'
const userInputElement4 = document.getElementById('user-input'); 

if(userInputElement4){ //use if as a replacement to '!'
  (userInputElement4 as HTMLInputElement).value = 'Hi-there'! 
} 
 */


console.log("---------------- Index Properties & Index Types-------------------------");

//to create an object for which we know the type but are not aware of how many properties or the name of each that will be present
// the prop can only be string, number or symbols but not anyhting else
//the prop can be interpreted as a string and the value is a string
interface ErrorContainer {
  // id: string; //can have pre-defined properties but cannot be of type number
  [prop: string]: string; 
}

const errorBag: ErrorContainer = {
  // email: 1 //will not accept nos
  // 1: 'not valid email' //will be valid as 1 can be interpreted as string
  email: 'not a valid email!',
  username: 'must start with capital char!'
}; 

console.log("---------------- Function overloads-------------------------");

type Combinable4 = string | number;

function add9(a: Combinable4, b: Combinable4) {
  if(typeof a === 'string' || typeof b === 'string'){ //type guard using typeof
    return a.toString() + b.toString();
  }
  return a + b;
}

const result9 = add9('Rich', 'Abraham');
// result9.split(''); //will give error as TS thinks result9 is of type Cominable
const result10 = add9('Rich', 'Abraham') as string;
result10.split(''); //no error as typecasting

// function overloading ..

function add10(a: number, b: number): number;
function add10(a: string, b: string): string;
function add10(a: string, b: number): string;
function add10(a: number, b: string): string;
function add10(a: Combinable4, b: Combinable4) {
  if(typeof a === 'string' || typeof b === 'string'){ //type guard using typeof
    return a.toString() + b.toString();
  }
  return a + b;
}


const result11 = add10('Rich', 'Abraham');
result11.split(''); //no error even without typecasting
//but
const result12 = add10(5,6);
// result12.split(''); //error as TS now knows that it will return number


console.log("---------------- Optional Chaining-------------------------");

const fetchedUserData = {
  id: '1',
  name: 'Rich',
  job: { title: 'CEO', description: ' My company'}
};

console.log(fetchedUserData.job.title);

//What if the job property is the result of an API Call, then TS is not sure whether we will get the job property, then we use optional chaining cause if data is present then TS will show error

const fetchedUserData2 = {
  id: '1',
  name: 'Rich',
  job: { title: 'CEO', description: ' My company'}
};


console.log(fetchedUserData2.job.title); //will give error as we are not sure job property will  be ther ein JSON response
console.log(fetchedUserData2.job && fetchedUserData2.job.title); //will still return error as JS uses chaining to handle this 



 //TS method
const fetchedUserData3 = {
  id: '1',
  name: 'Rich',
  job: { title: 'CEO', description: ' My company'}
};

//the below syntax ensure that job is checked only if fetchedUserData3 exists; title is checked only if job exists
console.log(fetchedUserData3?.job?.title);



console.log("---------------- Nullish Coalescing Operator-------------------------");

const userInput2 = null;
const storedData2 = userInput2 || 'DEFAULT';
console.log(storedData2);

const userInput3 = undefined;
const storedData3 = userInput3 || 'DEFAULT';
console.log(storedData3); //works same for null or undefined

const userInput4 = '';
const storedData4 = userInput4 || 'DEFAULT';
console.log(storedData4); //for empty val, it incorrectly makes its type 'DEFAULT'

//using nullish coalescing
const userInput5 = '';
const storedData5 = userInput4 ?? 'DEFAULT'; //prints empty string
console.log(storedData5); //for empty val, it incorrectly makes its type 'DEFAULT'

