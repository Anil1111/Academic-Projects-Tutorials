console.log("----------------Interface-------------------------");

interface Person {
  // name: string = 'Max'; //not possible to assign value
  name: string;
  age: number;

  greet(phrase: string): void; //cannot have a method with body
}

let user: Person;
user = {
  name: "Rich",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Hi i am - ");

console.log("----------------Custom types-------------------------");

type Person2 = {
  // name: string = 'Max'; //not possible to assign value
  name: string;
  age: number;
  greet(phrase: string): void; //cannot have a method with body
};

let user2: Person2;
user2 = {
  name: "Rich",
  age: 23,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user2.greet("Hi i am - ");

console.log("----------------Interface with Classes-------------------------");

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class NewPerson implements Greetable {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let greetUser: Greetable;
greetUser = new NewPerson("Rich", 28); // as greetUser is of type Greetable that has been implemented by NewPerson
greetUser.greet("Hi i am - ");
console.log(greetUser);

console.log("----------------Readonly interface-------------------------");

interface Greetable2 {
  readonly name: string;
  greet(phrase: string): void;
}

class NewPerson2 implements Greetable2 {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let greetUser2: Greetable2;
greetUser2 = new NewPerson("Rich", 28);
// greetUser2.name = 'abc'; //error as name is readonly as per the definition in the interface

console.log("----------------Extending Interfaces-------------------------");

interface Named3 {
  readonly name: string;
}
interface Greetable3 {
  greet(phrase: string): void;
}

class NewPerson3 implements Greetable3, Named3 {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

//or -----------

interface Named4 {
  readonly name: string;
}
interface Greetable4 extends Named4 {
  greet(phrase: string): void;
}

class NewPerson4 implements Greetable4 {
  constructor(public name: string, public age: number) {}
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

console.log(
  "----------------Interface as Function Type-------------------------"
);

type AddFn = (a: number, b: number) => number;
let add5: AddFn;

add5 = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add5(7, 12));

// can be written using interfaces as

//interface understands that the below ananymous function needs to be used as a function
interface AddFn2 {
  (a: number, b: number): number;
}

let add6: AddFn2;
add6 = (a: number, b: number) => {
  return a + b;
};

console.log(add6(8, 8));

console.log("----------------Optional Properties-------------------------");

interface Named5 {
  readonly name?: string;
  outputName?: string; //optional porperty
}
interface Greetable5 extends Named5 {
  greet?(phrase: string): void;
}

class NewPerson5 implements Greetable5 {
  name?: string; //can make optional or mandatory
  age = 30;
  // outputName = 'kary'; //possible
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name){ //checking whether the property exists as optional
      console.log(phrase + " " + this.name);
    } else {
      console.log('Hi');
    }
  }
}

let userGreet5: Greetable5;
userGreet5 = new NewPerson5();
if(userGreet5.greet){ //checking whether the method exists as optional
  userGreet5.greet('Hi there - ');
};
console.log(userGreet5);


console.log("----------------Optional Properties-------------------------");
