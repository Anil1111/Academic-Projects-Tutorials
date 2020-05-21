var _a;
console.log("---------------- Intersection Types-------------------------");
var emp1 = {
    name: "Rich",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log("---------------- Type Guards-------------------------");
function add8(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
// type guards on objects
var emp2 = {
    name: "Rich",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a car');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('loading cargo..' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(2000);
    }
}
useVehicle(v1);
useVehicle(v2);
//or else
function useVehicle2(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(4000);
    }
}
useVehicle2(v1);
useVehicle2(v2);
console.log("---------------- Discriminated Union-------------------------");
function moveAnimal(animal) {
    if ('flyingSpeed' in animal) { //cannot use instanceof as working with interfaces as it does not get compiled into JS(no support)
        console.log('Moving with speed' + animal.flyingSpeed);
    }
}
moveAnimal({ flyingSpeed: 340 });
function moveAnimal2(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving speed is:' + speed);
}
moveAnimal2({ type: 'bird', flyingSpeed: 340 });
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
var errorBag = {
    // email: 1 //will not accept nos
    // 1: 'not valid email' //will be valid as 1 can be interpreted as string
    email: 'not a valid email!',
    username: 'must start with capital char!'
};
console.log("---------------- Function overloads-------------------------");
function add9(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
var result9 = add9('Rich', 'Abraham');
// result9.split(''); //will give error as TS thinks result9 is of type Cominable
var result10 = add9('Rich', 'Abraham');
result10.split(''); //no error as typecasting
function add10(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //type guard using typeof
        return a.toString() + b.toString();
    }
    return a + b;
}
var result11 = add10('Rich', 'Abraham');
result11.split(''); //no error even without typecasting
//but
var result12 = add10(5, 6);
// result12.split(''); //error as TS now knows that it will return number
console.log("---------------- Optional Chaining-------------------------");
var fetchedUserData = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData.job.title);
//What if the job property is the result of an API Call, then TS is not sure whether we will get the job property, then we use optional chaining cause if data is present then TS will show error
var fetchedUserData2 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData2.job.title); //will give error as we are not sure job property will  be ther ein JSON response
console.log(fetchedUserData2.job && fetchedUserData2.job.title); //will still return error as JS uses chaining to handle this 
//TS method
var fetchedUserData3 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
//the below syntax ensure that job is checked only if fetchedUserData3 exists; title is checked only if job exists
console.log((_a = fetchedUserData3 === null || fetchedUserData3 === void 0 ? void 0 : fetchedUserData3.job) === null || _a === void 0 ? void 0 : _a.title);
console.log("---------------- Nullish Coalescing Operator-------------------------");
var userInput2 = null;
var storedData2 = userInput2 || 'DEFAULT';
console.log(storedData2);
var userInput3 = undefined;
var storedData3 = userInput3 || 'DEFAULT';
console.log(storedData3); //works same for null or undefined
var userInput4 = '';
var storedData4 = userInput4 || 'DEFAULT';
console.log(storedData4); //for empty val, it incorrectly makes its type 'DEFAULT'
//using nullish coalescing
var userInput5 = '';
var storedData5 = userInput4 !== null && userInput4 !== void 0 ? userInput4 : 'DEFAULT'; //prints empty string
console.log(storedData5); //for empty val, it incorrectly makes its type 'DEFAULT'
