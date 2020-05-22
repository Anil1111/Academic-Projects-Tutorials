console.log("-------------------Decorators----------------------");

//To be used as a decorator
function Logger(constructor: Function) {
  console.log('Loggin.....');
  console.log(constructor);
}

//@pointAtAFunction 
//Logger gets executed when the class is defined itself right at start not when it is instantiated
@Logger
class Pers {
  name = 'Rich';

  constructor(){
    console.log('Creating person object..');
  }
}

const pers = new Pers();
console.log(pers);

console.log("-------------------Decorator Factory----------------------");

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger2('LOGGING - PERSON')
class Pers2 {
  name = 'Rich';

  constructor(){
    console.log('Creating person object..');
  }
}

const pers2 = new Pers2();
console.log(pers2);


console.log("-------------------Other Decorator Functions----------------------");


function WithTemplate(template: string, hookId: string) {
  //tells typescipt that i dont need to use '_'
  return (_: Function) => {

  //Commenting as document method that works only in browser
  /*     
    const hookEl = document.getElementById(hookId);
    if (hookEl){
      hookEl.innerHTML = template; 
    } //changes the DOM by appending 'Myy Person'
  */
  }
  
}

@WithTemplate('<h1>Myy Person</h1>', 'app') //renders on browser
class Pers3 {
  name = 'Rich';

  constructor(){
    console.log('Creating person object..');
  }
}


//if you wish to access the param passed to the constructor

function WithTemplate2(template: string, hookId: string) {
  return (constructor: any) => {
    //Commenting as document method that works only in browser  
    /* 
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); //creating a new object with the constructor
    if (hookEl){
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name; //appends 'Rich'
    }
  */
  }
}

@WithTemplate2('<h1>New person</h1>', 'app') //renders on browser
class Pers4 {
  name = 'Rich';

  constructor(){
    console.log('Creating person object..');
  }
}

const pers4 = new Pers4();
console.log(Pers4);


console.log("-------------------Decorator Factory----------------------");

