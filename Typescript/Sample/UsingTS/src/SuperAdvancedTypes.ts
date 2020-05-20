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

type Combinable3 = string | number;

function add3(a: Combinable3, b: Combinable3) {

}

console.log("---------------- Type Guards-------------------------");

