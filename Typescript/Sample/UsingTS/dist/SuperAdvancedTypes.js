"use strict";
var _a;
console.log("---------------- Intersection Types-------------------------");
const emp1 = {
    name: "Rich",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log("---------------- Type Guards-------------------------");
function add8(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const emp2 = {
    name: "Rich",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
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
class Car {
    drive() {
        console.log('Driving a car');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('loading cargo..' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(2000);
    }
}
useVehicle(v1);
useVehicle(v2);
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
    if ('flyingSpeed' in animal) {
        console.log('Moving with speed' + animal.flyingSpeed);
    }
}
moveAnimal({ flyingSpeed: 340 });
function moveAnimal2(animal) {
    let speed;
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
console.log("---------------- Index Properties & Index Types-------------------------");
const errorBag = {
    email: 'not a valid email!',
    username: 'must start with capital char!'
};
console.log("---------------- Function overloads-------------------------");
function add9(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result9 = add9('Rich', 'Abraham');
const result10 = add9('Rich', 'Abraham');
result10.split('');
function add10(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result11 = add10('Rich', 'Abraham');
result11.split('');
const result12 = add10(5, 6);
console.log("---------------- Optional Chaining-------------------------");
const fetchedUserData = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData.job.title);
const fetchedUserData2 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData2.job.title);
console.log(fetchedUserData2.job && fetchedUserData2.job.title);
const fetchedUserData3 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log((_a = fetchedUserData3 === null || fetchedUserData3 === void 0 ? void 0 : fetchedUserData3.job) === null || _a === void 0 ? void 0 : _a.title);
console.log("---------------- Nullish Coalescing Operator-------------------------");
const userInput2 = null;
const storedData2 = userInput2 || 'DEFAULT';
console.log(storedData2);
const userInput3 = undefined;
const storedData3 = userInput3 || 'DEFAULT';
console.log(storedData3);
const userInput4 = '';
const storedData4 = userInput4 || 'DEFAULT';
console.log(storedData4);
const userInput5 = '';
const storedData5 = userInput4 !== null && userInput4 !== void 0 ? userInput4 : 'DEFAULT';
console.log(storedData5);
//# sourceMappingURL=SuperAdvancedTypes.js.map