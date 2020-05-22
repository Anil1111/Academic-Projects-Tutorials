"use strict";
console.log("-------------------Generics----------------------");
const names10 = ["Rich", "Abraham"];
const names11 = ["Rich", "Abraham"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done");
    }, 1000);
});
promise.then((data) => {
    data.split("");
});
console.log("-------------------Generic Function----------------------");
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Rich" }, { age: 20 });
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Rich" }, { age: 20 });
console.log(mergedObj2.name);
function merge3(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj3 = merge2({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj3);
const mergedObj4 = merge2({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log("-------------------Constraints----------------------");
const mergedObj5 = merge2({ name: "Rich", hobbies: ["Sports"] }, 30);
console.log(mergedObj5);
function merge4(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj6 = merge4({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj6);
console.log("-------------------Another Generic Function----------------------");
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} element`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint("HI there!"));
console.log(countAndPrint(["Sports", "Cooking"]));
console.log(countAndPrint([]));
console.log("-------------------'keyOf Constraint'----------------------");
function extractAndConvert(obj, key) {
}
console.log(extractAndConvert({}, "name"));
function extractAndConvert2(obj, key) {
    return "Value of " + obj[key];
}
console.log(extractAndConvert2({ name: "Rich" }, "name"));
console.log("-------------------'Generic Classes'----------------------");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Rich");
textStorage.addItem("Samson");
textStorage.addItem("Abr");
textStorage.removeItem("Abr");
console.log(textStorage.getItems());
const numbStorage = new DataStorage();
numbStorage.addItem(10);
numbStorage.addItem(20);
numbStorage.addItem(30);
numbStorage.removeItem(20);
console.log(numbStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ name: "Rich" });
objStorage.addItem({ name: "Abr" });
objStorage.addItem({ name: 'karl' });
objStorage.removeItem({ name: "Abr" });
console.log(objStorage.getItems());
const myObj = { name: 'doom' };
objStorage.addItem(myObj);
console.log(objStorage.getItems());
objStorage.removeItem(myObj);
console.log(objStorage.getItems());
class DataStorage2 {
}
console.log("-------------------Generic Utility Types ----------------------");
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Rich', 'Anna'];
console.log("------------------- Generic Types vs Union Types----------------------");
console.log("------------------- ----------------------");
//# sourceMappingURL=generics.js.map