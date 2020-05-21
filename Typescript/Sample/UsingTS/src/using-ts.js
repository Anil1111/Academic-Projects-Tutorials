//export { add, add2 }; //to avoid es lint errors due to same variables bw=etween ts and js files.
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add3(num1, num2) {
    return num1 + num2;
}
// var button = document.querySelector("button")!; //cheaper method
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
if (button) { //cleaner method of checking if button exists in DOM
    button.addEventListener("click", function () {
        console.log(add(+input1.value, +input2.value));
    });
}
function add2(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
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
// let resultPhrase = 0; //will get an error as type is now changing to number
add2(number1, number2, printResult3, resultPhrase);
