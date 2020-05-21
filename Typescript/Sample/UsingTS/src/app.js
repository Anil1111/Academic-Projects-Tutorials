console.log("-------------------Generics----------------------");
var names10 = ['Rich', 'Abraham'];
var names11 = ['Rich', 'Abraham'];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 1000);
});
promise.then(function (data) {
    data.split('');
});
console.log("-------------------Generics----------------------");
