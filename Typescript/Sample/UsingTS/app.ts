console.log("----------------Return Types-------------------------");
// return type of add is number - explicit
function add(n1: number, n2: number): number{
  return n1 + n2;
}

//has 'void' return type as nothing returned
function printResult(num: number){
  console.log('Result:' + num);
}

printResult( add(5,12) );
console.log(printResult( add(5,12) )); //undefined
// let someValue: undefined;

console.log("----------------Return Types-------------------------");