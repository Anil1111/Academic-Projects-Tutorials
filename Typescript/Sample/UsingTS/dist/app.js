"use strict";
console.log("-------------------Generics----------------------");
var names10 = ['Rich', 'Abraham'];
var names11 = ['Rich', 'Abraham'];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('this is done');
    }, 1000);
});
promise.then(function (data) {
    data.split('');
});
console.log("-------------------Generic Function----------------------");
console.log("-------------------Generic Function----------------------");
//# sourceMappingURL=app.js.map