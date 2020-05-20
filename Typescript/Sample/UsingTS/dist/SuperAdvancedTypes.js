"use strict";
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
console.log("---------------- Discriminated Union-------------------------");
//# sourceMappingURL=SuperAdvancedTypes.js.map