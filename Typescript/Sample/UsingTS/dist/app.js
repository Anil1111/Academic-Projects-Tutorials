"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("-------------------Note: Please run npm start to see output in Browser| node decorator.js will throw error----------------------");
console.log("-------------------Decorators----------------------");
function Logger(constructor) {
    console.log('Loggin.....');
    console.log(constructor);
}
let Pers = (() => {
    let Pers = class Pers {
        constructor() {
            this.name = 'Rich';
            console.log('Creating person object..');
        }
    };
    Pers = __decorate([
        Logger
    ], Pers);
    return Pers;
})();
const pers = new Pers();
console.log(pers);
console.log("-------------------Decorator Factory----------------------");
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Pers2 = (() => {
    let Pers2 = class Pers2 {
        constructor() {
            this.name = 'Rich';
            console.log('Creating person object..');
        }
    };
    Pers2 = __decorate([
        Logger2('LOGGING - PERSON')
    ], Pers2);
    return Pers2;
})();
const pers2 = new Pers2();
console.log(pers2);
console.log("-------------------Other Decorator Functions----------------------");
function WithTemplate(template, hookId) {
    return (_) => {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let Pers3 = (() => {
    let Pers3 = class Pers3 {
        constructor() {
            this.name = 'Rich';
            console.log('Creating person object..');
        }
    };
    Pers3 = __decorate([
        WithTemplate('<h1>Myy Person</h1>', 'app')
    ], Pers3);
    return Pers3;
})();
function WithTemplate2(template, hookId) {
    return (constructor) => {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Pers4 = (() => {
    let Pers4 = class Pers4 {
        constructor() {
            this.name = 'Rich';
            console.log('Creating person object..');
        }
    };
    Pers4 = __decorate([
        WithTemplate2('<h1>New person</h1>', 'app2')
    ], Pers4);
    return Pers4;
})();
console.log("-------------------Multiple Decorators----------------------");
function Logger3(logString) {
    console.log('\nExecuting LOGGER from Factory....');
    return function (constructor) {
        console.log(`Executing LOGGER ${logString}`);
        console.log(constructor);
    };
}
function WithTemplate3(template, hookId) {
    console.log('\nExecuting LOGGER from Factory....');
    console.log('\nExecuting Template from Factory....');
    return (constructor) => {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Pers5 = (() => {
    let Pers5 = class Pers5 {
        constructor() {
            this.name = 'RichMult';
            console.log('Inside Constructor - Creating person object');
        }
    };
    Pers5 = __decorate([
        Logger3('LGGGING - MULTIPLE DECO'),
        WithTemplate3('<h1>Multiple Decorators</h1>', 'app3')
    ], Pers5);
    return Pers5;
})();
console.log("-------------------Property Decorator----------------------");
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
let Product = (() => {
    class Product {
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        set price(val) {
            if (val > 0) {
                this._price;
            }
            else {
                throw new Error('Invalid pirce - should be positive!');
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
})();
console.log("-------------------Accessor and Parameter Decorators----------------------");
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
let Product2 = (() => {
    class Product2 {
        constructor(t, p) {
            this.title = t;
            this._price = p;
        }
        set price(val) {
            if (val > 0) {
                this._price;
            }
            else {
                throw new Error('Invalid pirce - should be positive!');
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        Log
    ], Product2.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product2.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product2.prototype, "getPriceWithTax", null);
    return Product2;
})();
console.log("-------------------Returning or Changing a class in a class decorator----------------------");
function WithTemplate4(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._args) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
;
let Pers6 = (() => {
    let Pers6 = class Pers6 {
        constructor() {
            this.name = 'RichChange';
            console.log('Inside Constructor - Creating person object');
        }
    };
    Pers6 = __decorate([
        WithTemplate4('<h1>Changing Class</h1>', 'app4')
    ], Pers6);
    return Pers6;
})();
const pers6 = new Pers6();
console.log(pers6);
console.log("-------------------Creating Autobind Decorator - Changing Method Decorator----------------------");
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
const printer = new Printer();
const button2 = document.querySelector('#newButton');
button2.addEventListener('click', printer.showMessage);
function Autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
let Printer2 = (() => {
    class Printer2 {
        constructor() {
            this.message = 'This works!';
        }
        showMessage() {
            console.log(this.message);
        }
    }
    __decorate([
        Autobind
    ], Printer2.prototype, "showMessage", null);
    return Printer2;
})();
const printer2 = new Printer2();
const button3 = document.querySelector('#newButton2');
button3.addEventListener('click', printer2.showMessage);
console.log("-------------------Validation Decorators -I----------------------");
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = Number(priceEl.value);
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
    if (title.trim().length > 0 && price > 0) {
        const createdCourse2 = new Course(title, price);
        console.log(createdCourse2);
    }
});
const registeredValidators = {};
function Required(target, propName) {
    console.log('Executing Requried decorator ' + propName);
    registeredValidators[target.constructor.name] = {
        [propName]: ['required'],
    };
    function PositiveNumber(_target, propertyName) {
        console.log('Executing Requried decorator ' + propertyName);
        registeredValidators[target.constructor.name] = {
            [propName]: ['required'],
        };
    }
    function validate(obj) {
    }
    let Course2 = (() => {
        class Course2 {
            constructor(title, price) {
                this.title = title;
                this.price = price;
            }
        }
        __decorate([
            Required
        ], Course2.prototype, "title", void 0);
        return Course2;
    })();
    const courseForm2 = document.querySelector('form');
    courseForm2.addEventListener('submit', event => {
        event.preventDefault();
        const titleEl = document.getElementById('title');
        const priceEl = document.getElementById('price');
        const title = titleEl.value;
        const price = Number(priceEl.value);
        const createdCourse = new Course(title, price);
        console.log(createdCourse);
    });
    console.log("-------------------Accessor and Parameter Decorators----------------------");
}
//# sourceMappingURL=app.js.map