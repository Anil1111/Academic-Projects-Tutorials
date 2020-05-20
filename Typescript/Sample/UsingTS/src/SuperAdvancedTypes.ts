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



console.log("---------------- Discriminated Union-------------------------");

