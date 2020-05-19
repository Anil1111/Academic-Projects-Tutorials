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
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult3 = true;
var resultPhrase = "Result is: ";
add2(number1, number2, printResult3, resultPhrase);
//# sourceMappingURL=using-ts.js.map