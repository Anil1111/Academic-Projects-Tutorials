"use strict";
var _a;
console.log("---------------- Intersection Types-------------------------");
var emp1 = {
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
var emp2 = {
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
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a car');
    };
    return Car;
}());
var Truck = (function () {
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
console.log("---------------- Index Properties & Index Types-------------------------");
var errorBag = {
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
var result9 = add9('Rich', 'Abraham');
var result10 = add9('Rich', 'Abraham');
result10.split('');
function add10(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result11 = add10('Rich', 'Abraham');
result11.split('');
var result12 = add10(5, 6);
console.log("---------------- Optional Chaining-------------------------");
var fetchedUserData = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData.job.title);
var fetchedUserData2 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log(fetchedUserData2.job.title);
console.log(fetchedUserData2.job && fetchedUserData2.job.title);
var fetchedUserData3 = {
    id: '1',
    name: 'Rich',
    job: { title: 'CEO', description: ' My company' }
};
console.log((_a = fetchedUserData3 === null || fetchedUserData3 === void 0 ? void 0 : fetchedUserData3.job) === null || _a === void 0 ? void 0 : _a.title);
console.log("---------------- Nullish Coalescing Operator-------------------------");
var userInput2 = null;
var storedData2 = userInput2 || 'DEFAULT';
console.log(storedData2);
var userInput3 = undefined;
var storedData3 = userInput3 || 'DEFAULT';
console.log(storedData3);
var userInput4 = '';
var storedData4 = userInput4 || 'DEFAULT';
console.log(storedData4);
var userInput5 = '';
var storedData5 = userInput4 !== null && userInput4 !== void 0 ? userInput4 : 'DEFAULT';
console.log(storedData5);
//# sourceMappingURL=SuperAdvancedTypes.js.map