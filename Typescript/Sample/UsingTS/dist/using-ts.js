"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add3(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener("click", function () {
        console.log(add(+input1.value, +input2.value));
    });
}
function add2(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult3 = true;
let resultPhrase = "Result is: ";
add2(number1, number2, printResult3, resultPhrase);
//# sourceMappingURL=using-ts.js.map