"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("-------------------Generics----------------------");
var names10 = ["Rich", "Abraham"];
var names11 = ["Rich", "Abraham"];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("this is done");
    }, 1000);
});
promise.then(function (data) {
    data.split("");
});
console.log("-------------------Generic Function----------------------");
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Rich" }, { age: 20 });
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj2 = merge2({ name: "Rich" }, { age: 20 });
console.log(mergedObj2.name);
function merge3(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj3 = merge2({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj3);
var mergedObj4 = merge2({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log("-------------------Constraints----------------------");
var mergedObj5 = merge2({ name: "Rich", hobbies: ["Sports"] }, 30);
console.log(mergedObj5);
function merge4(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj6 = merge4({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj6);
console.log("-------------------Another Generic Function----------------------");
function countAndPrint(element) {
    var descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " element";
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
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        else {
            this.data.splice(this.data.indexOf(item), 1);
        }
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Rich");
textStorage.addItem("Samson");
textStorage.addItem("Abr");
textStorage.removeItem("Abr");
console.log(textStorage.getItems());
var numbStorage = new DataStorage();
numbStorage.addItem(10);
numbStorage.addItem(20);
numbStorage.addItem(30);
numbStorage.removeItem(20);
console.log(numbStorage.getItems());
var objStorage = new DataStorage();
objStorage.addItem({ name: "Rich" });
objStorage.addItem({ name: "Abr" });
objStorage.addItem({ name: 'karl' });
objStorage.removeItem({ name: "Abr" });
console.log(objStorage.getItems());
var myObj = { name: 'doom' };
objStorage.addItem(myObj);
console.log(objStorage.getItems());
objStorage.removeItem(myObj);
console.log(objStorage.getItems());
var DataStorage2 = (function () {
    function DataStorage2() {
    }
    return DataStorage2;
}());
console.log("-------------------Generic Utility Types ----------------------");
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ['Rich', 'Anna'];
console.log("------------------- Generic Types vs Union Types----------------------");
console.log("------------------- ----------------------");
//# sourceMappingURL=app.js.map