console.log(
  "-------------------Note: Please run npm start to see output in Browser| node decorator.js will throw error----------------------"
);

console.log("-------------------Decorators----------------------");

//To be used as a decorator
function Logger(constructor: Function) {
  console.log("Loggin.....");
  console.log(constructor);
}

//@pointAtAFunction
//Logger gets executed when the class is defined itself right at start not when it is instantiated
@Logger
class Pers {
  name = "Rich";

  constructor() {
    console.log("Creating person object..");
  }
}

const pers = new Pers();
console.log(pers);

console.log("-------------------Decorator Factory----------------------");

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2("LOGGING - PERSON")
class Pers2 {
  name = "Rich";

  constructor() {
    console.log("Creating person object..");
  }
}

const pers2 = new Pers2();
console.log(pers2);

console.log(
  "-------------------Other Decorator Functions----------------------"
);

function WithTemplate(template: string, hookId: string) {
  //'_' tells typescipt that we dont need to use 'constructor' anywhere
  return (_constructor: Function) => {
    //Below methods that works only in browser
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    } //changes the DOM by appending 'Myy Person'
  };
}

@WithTemplate("<h1>Myy Person</h1>", "app") //renders on browser
class Pers3 {
  name = "Rich";

  constructor() {
    console.log("Creating person object..");
  }
}

//if you wish to access the param passed to the constructor

function WithTemplate2(template: string, hookId: string) {
  return (constructor: any) => {
    //Below methods that works only in browser
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); //creating a new object with the constructor and will print the message in constructor()
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name; //appends 'Rich'
    }
  };
}

@WithTemplate2("<h1>New person</h1>", "app2") //renders on browser
class Pers4 {
  name = "Rich";

  constructor() {
    console.log("Creating person object..");
  }
}

console.log("-------------------Multiple Decorators----------------------");
//When multiple decorators are present, they get executed bottom up
// But the decorator factory is executed sequentially

function Logger3(logString: string) {
  console.log("\nExecuting LOGGER from Factory...."); //will be executed first sequentially as decorator factory
  return function (constructor: Function) {
    console.log(`Executing LOGGER ${logString}`); //will be executed second as first decorator from top
    console.log(constructor);
  };
}

function WithTemplate3(template: string, hookId: string) {
  console.log("\nExecuting LOGGER from Factory...."); //will be executed second sequentially as decorator factory
  console.log("\nExecuting Template from Factory....");
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor(); //creating a new object with the constructor and will print the message in constructor()
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name; //appends 'Rich'
    }
  };
}
@Logger3("LGGGING - MULTIPLE DECO")
@WithTemplate3("<h1>Multiple Decorators</h1>", "app3") //renders on browser
class Pers5 {
  name = "RichMult";

  constructor() {
    console.log("Inside Constructor - Creating person object");
  }
}

console.log("-------------------Property Decorator----------------------");

//for instance property like title, target will be the prototype of the object but we use 'any' as we are not sure
//if it was a static property, then it would refer to the constructor function
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName); //prototype, "title" and executes when class is defined
}

class Product {
  @Log //adding decorator to a property; it received two arguments
  public title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(val: number) {
    if (val > 0) {
      this._price;
    } else {
      throw new Error("Invalid pirce - should be positive!");
    }
  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

console.log(
  "-------------------Accessor and Parameter Decorators----------------------"
);

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target); //prototype of Product2
  console.log(name); //price - which is the name of the accessor
  console.log(descriptor); //setter function
}

//same params and can reuse Log2
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target); //prototype of Product2
  console.log(name); //getPriceWithTax - which is the name of the method
  console.log(descriptor); //descriptor of the method
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target); //prototype of Product2
  console.log(name); //getPriceWithTax - which is the name of the method
  console.log(position); //0 - position of the param in function
}

class Product2 {
  @Log //is a property Decorator
  public title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2 //is an accessor decorator
  set price(val: number) {
    if (val > 0) {
      this._price;
    } else {
      throw new Error("Invalid pirce - should be positive!");
    }
  }
  @Log3 //is a method decorator
  getPriceWithTax(@Log4 tax: number) {
    //@Log4 is a parameter decorator
    return this._price * (1 + tax);
  }
}

console.log(
  "-------------------Returning or Changing a class in a class decorator----------------------"
);

//special type for assigning type of constructor: {new(...args: any[]): {} }
// function that can be called with new keyword: { new(): {} }
function WithTemplate4(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // We are returning a new class
    //providing a class name is not mandatory
    //we extend the originalConstructor to have all the props and params passed
    //this will ensure that the template will be rendered to DOM only when the object of the class is instantiated
    return class extends originalConstructor {
      //to accept any number of arguments
      //replacing args with _args below as we tell TS we dont use it
      constructor(..._args: any[]) {
        super();
        //moving the logic inside this
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate4("<h1>Changing Class</h1>", "app4") //renders on browser
class Pers6 {
  name = "RichChange";

  constructor() {
    console.log("Inside Constructor - Creating person object");
  }
}

//Will now work only when the class is instanitated as the new class is returned that replaces the original class or constructor function
const pers6 = new Pers6();
console.log(pers6);

console.log(
  "-------------------Creating Autobind Decorator - Changing Method Decorator----------------------"
);

class Printer {
  message = "This works!";

  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const button2 = document.querySelector("#newButton")!;
button2.addEventListener("click", printer.showMessage); //undefined as context is lost in addEventListener and requires binding

//Solution - Build an Autobinding Decorator

function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    //the function is used to implement some logic without directly executing the value ie descriptor.name ie func() of the property
    get() {
      const boundFn = originalMethod.bind(this); //this refers to the object on which it was originally referred
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer2 {
  message = "This works!";

  //the decorator will overwrite the below method descriptor with the new descriptor
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer2 = new Printer2();
const button3 = document.querySelector("#newButton2")!;
button3.addEventListener("click", printer2.showMessage);

console.log(
  "-------------------Validation Decorators -I----------------------"
);

class Course {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.getElementById('oldForm')!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault(); //to not submit the form and send an HTTP request
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = <HTMLInputElement>document.getElementById("price");

  const title = titleEl.value;
  const price = Number(priceEl.value); //+priceEl.value

  const createdCourse = new Course(title, price);
  console.log(createdCourse); //but works for empty title and price

  //one solution
  if (title.trim().length > 0 && price > 0) {
    const createdCourse2 = new Course(title, price);
    console.log(createdCourse2); //but works for empty title and price
  }
});

//Decorator solution ----------
//Create a ValidatorConfig that will register all the validators for each object properties in a storage and then use the validate() to run the validations and return true/false

interface ValidatorConfig { //to store all the validators of Course2
  //property will represent the class name with index type notation
  [property: string]: {
    //properties of the class
    [validatableProp: string]: string[]; //['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {}; //initialy null value
 
//below decorators can be part of an external library
//use the @Required and @PositiveNumber decorators to register/store the validator function and decorator 
function Required(target: any, propName: string) {
  console.log("Executing Requried decorator " + propName);
  //target.constructor.name gives the class name as the constructor function represents the class
  registeredValidators[target.constructor.name] = {
    //as all the existing properties need to be appened otherwise 'required' will overwrite it
    ...registeredValidators[target.constructor.name], 
    [propName]: ['required'], 
  };
}

function PositiveNumber(target: any, propName: string) {
  console.log("Executing PositiveNumber decorator " + propName);
  registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name], 
    [propName]: ["positive"],
  };
}

//should run through all validator functions are run a logic
//obtain which constructor function and then the validator functions registered on them
function validate(obj: any){
  const objValidatorConfig = registeredValidators[obj.constructor.name]; //class name
  if (!objValidatorConfig) {
    return true; //as no validators registered, thus nothing to do and is Valid
  } 

  let isValid = true; //ensuring all validators are checked
  //loop through properties for which validators registered ie title (Required) and price (PositiveNumber)
  for (const prop in objValidatorConfig){ //iterate the object properties in class
    for (const validator of objValidatorConfig[prop]){ //iterate the validators
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]; //createdCourse[title] and !! converts it into boolean
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course2 {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm2 = document.getElementById("newForm")!;
courseForm2.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title2") as HTMLInputElement;
  const priceEl = <HTMLInputElement>document.getElementById("price2");
  const title = titleEl.value;
  const price = Number(priceEl.value);

  const createdCourse = new Course2(title, price);
  console.log(createdCourse); //but works for empty title and price

  if (!validate(createdCourse)){
    alert('Invalid Input!');
    return;
  }
});

console.log(
  "-------------------Accessor and Parameter Decorators----------------------"
);
