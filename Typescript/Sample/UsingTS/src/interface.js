console.log("----------------Interface-------------------------");
var user;
user = {
    name: "Rich",
    age: 23,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user.greet("Hi i am - ");
console.log("----------------Custom types-------------------------");
var user2;
user2 = {
    name: "Rich",
    age: 23,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user2.greet("Hi i am - ");
console.log("----------------Interface with Classes-------------------------");
var NewPerson = /** @class */ (function () {
    function NewPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    NewPerson.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return NewPerson;
}());
var greetUser;
greetUser = new NewPerson("Rich", 28); // as greetUser is of type Greetable that has been implemented by NewPerson
greetUser.greet("Hi i am - ");
console.log(greetUser);
console.log("----------------Readonly interface-------------------------");
var NewPerson2 = /** @class */ (function () {
    function NewPerson2(name, age) {
        this.name = name;
        this.age = age;
    }
    NewPerson2.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return NewPerson2;
}());
var greetUser2;
greetUser2 = new NewPerson("Rich", 28);
// greetUser2.name = 'abc'; //error as name is readonly as per the definition in the interface
console.log("----------------Extending Interfaces-------------------------");
var NewPerson3 = /** @class */ (function () {
    function NewPerson3(name, age) {
        this.name = name;
        this.age = age;
    }
    NewPerson3.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return NewPerson3;
}());
var NewPerson4 = /** @class */ (function () {
    function NewPerson4(name, age) {
        this.name = name;
        this.age = age;
    }
    NewPerson4.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return NewPerson4;
}());
console.log("----------------Interface as Function Type-------------------------");
var add5;
add5 = function (n1, n2) {
    return n1 + n2;
};
console.log(add5(7, 12));
var add6;
add6 = function (a, b) {
    return a + b;
};
console.log(add6(8, 8));
console.log("----------------Optional Properties-------------------------");
var NewPerson5 = /** @class */ (function () {
    // outputName = 'kary'; //possible
    function NewPerson5(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    NewPerson5.prototype.greet = function (phrase) {
        if (this.name) { //checking whether the property exists as optional
            console.log(phrase + " " + this.name);
        }
        else {
            console.log('Hi');
        }
    };
    return NewPerson5;
}());
var userGreet5;
userGreet5 = new NewPerson5();
if (userGreet5.greet) { //checking whether the method exists as optional
    userGreet5.greet('Hi there - ');
}
;
console.log(userGreet5);
console.log("----------------Optional Properties-------------------------");
