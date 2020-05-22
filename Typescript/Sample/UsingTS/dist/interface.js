"use strict";
console.log("----------------Interface-------------------------");
let user;
user = {
    name: "Rich",
    age: 23,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user.greet("Hi i am - ");
console.log("----------------Custom types-------------------------");
let user2;
user2 = {
    name: "Rich",
    age: 23,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user2.greet("Hi i am - ");
console.log("----------------Interface with Classes-------------------------");
class NewPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let greetUser;
greetUser = new NewPerson("Rich", 28);
greetUser.greet("Hi i am - ");
console.log(greetUser);
console.log("----------------Readonly interface-------------------------");
class NewPerson2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let greetUser2;
greetUser2 = new NewPerson("Rich", 28);
console.log("----------------Extending Interfaces-------------------------");
class NewPerson3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
class NewPerson4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
console.log("----------------Interface as Function Type-------------------------");
let add5;
add5 = (n1, n2) => {
    return n1 + n2;
};
console.log(add5(7, 12));
let add6;
add6 = (a, b) => {
    return a + b;
};
console.log(add6(8, 8));
console.log("----------------Optional Properties-------------------------");
class NewPerson5 {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let userGreet5;
userGreet5 = new NewPerson5();
if (userGreet5.greet) {
    userGreet5.greet('Hi there - ');
}
;
console.log(userGreet5);
console.log("----------------Optional Properties-------------------------");
//# sourceMappingURL=interface.js.map