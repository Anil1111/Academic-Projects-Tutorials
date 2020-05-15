
let count = 1;

while (count <= 100) {
  let modulo3 = count % 3;
  let modulo5 = count % 5;

  if(modulo3 == 0 && modulo5 == 0) {
    console.log("FizzBuzz");
  } else if(modulo3 == 0 || modulo5 == 0) {
    if (modulo3 == 0) {
      console.log("Fizz");
    };
    if(modulo5 == 0) {
      console.log("Buzz");         
    };
  } else {
    console.log(count);
  };

  count++;

}
