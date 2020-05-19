"use strict";
console.log("----------------Return Types-------------------------");
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
function printResult2(num) {
    console.log("Result:" + num);
    return;
}
printResult(add(5, 12));
console.log(printResult(add(5, 12)));
console.log("----------------Functions as Types-------------------------");
var combineValues;
combineValues = 5;
var combineValues2;
combineValues2 = printResult;
var combineValues3;
combineValues3 = add;
console.log(combineValues3(8, 8));
console.log("----------------Functions Types and callback-------------------------");
function addHandler(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandler(10, 20, function (result) {
    console.log("Result:" + result);
    return result;
});
console.log("----------------Unknown Types-------------------------");
var userInput;
var userName;
userInput = 5;
userInput = "Max";
var userInput1;
userName = userInput1;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
//# sourceMappingURL=advancedTypes.js.map