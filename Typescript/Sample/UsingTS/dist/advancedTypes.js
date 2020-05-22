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
let combineValues;
combineValues = 5;
let combineValues2;
combineValues2 = printResult;
let combineValues3;
combineValues3 = add;
console.log(combineValues3(8, 8));
console.log("----------------Functions Types and callback-------------------------");
function addHandler(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addHandler(10, 20, (result) => {
    console.log("Result:" + result);
    return result;
});
console.log("----------------Unknown Types-------------------------");
let userInput;
let userName;
userInput = 5;
userInput = "Max";
let userInput1;
userName = userInput1;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
//# sourceMappingURL=advancedTypes.js.map