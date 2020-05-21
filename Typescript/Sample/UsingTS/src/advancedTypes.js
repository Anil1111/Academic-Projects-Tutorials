console.log("----------------Return Types-------------------------");
// return type of add is number - explicit
function add(n1, n2) {
    return n1 + n2;
}
//has 'void' return type as nothing returned
function printResult(num) {
    console.log("Result:" + num);
}
function printResult2(num) {
    console.log("Result:" + num);
    return; //requires return statement as undefined return type explicitly mentioned
}
printResult(add(5, 12));
console.log(printResult(add(5, 12))); //undefined
// let someValue: undefined;
console.log("----------------Functions as Types-------------------------");
var combineValues;
combineValues = 5; //wont give error as not declared as type Function
var combineValues2;
combineValues2 = printResult; //wont give error as function type not declared
var combineValues3;
// combineValues3 = printResult; //error - as it should take 2 numbers as argument and return a number
combineValues3 = add;
console.log(combineValues3(8, 8));
console.log("----------------Functions Types and callback-------------------------");
function addHandler(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandler(10, 20, function (result) {
    console.log("Result:" + result);
    return result; //although addHandler function specifies return type as void, wont throe error
});
console.log("----------------Unknown Types-------------------------");
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; //error - type unknown not assignable to string
var userInput1;
userName = userInput1; //no error as 'any' disables all TS typechecking
if (typeof userInput === "string") {
    //extra type check is required
    userName = userInput;
}
// made severa;
function generateError(message, code) {
    throw { message: message, code: code }; //object with keys as message and code
    // while (true) //also returns never
}
// const result = generateError("An error occured!", 500);
// console.log(result); //will be of type never as the script crashes
