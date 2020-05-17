export {}; //to avoid es lint errors due to same variables bw=etween ts and js files

var button = document.querySelector("button");
var input1 = document.getElementById("num1")! as HTMLInputElement;
var input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
        return num1 + num2;
}

button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value)); 
});

function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add2(number1, number2, printResult, resultPhrase);