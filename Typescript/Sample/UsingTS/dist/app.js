"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("----------------Spread Operator-------------------------");
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var human = {
    name: 'Max',
    age: 28
};
var newHuman = __assign({}, human);
console.log(newHuman);
console.log("----------------Rest Paramters-------------------------");
var add4 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (num) {
    });
};
var addedNums = add4(2, 4, 6, 8);
console.log(addedNums);
console.log("----------------Rest Paramters-------------------------");
//# sourceMappingURL=app.js.map