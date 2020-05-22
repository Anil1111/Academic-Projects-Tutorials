"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        WithTemplate2('<h1>New person</h1>', 'app')
    ], Pers4);
    return Pers4;
})();
const pers4 = new Pers4();
console.log(Pers4);
console.log("-------------------Decorator Factory----------------------");
//# sourceMappingURL=app.js.map