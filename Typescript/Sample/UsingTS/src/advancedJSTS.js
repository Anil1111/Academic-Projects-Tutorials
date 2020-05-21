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
console.log(newHuman); //{ name: 'Max', age: 28 }
console.log("----------------Rest Paramters-------------------------");
var add4 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) {
        return acc + num;
    });
};
var addedNums = add4(2, 4, 6, 8);
console.log(addedNums);
console.log("----------------Array and Object Destructuring-------------------------");
var hobbies2 = ['Sports', 'Cooking'];
// const hobby1 = hobbies2[0];
// const hobby2 = hobbies2[1];
//or
var hobby1 = hobbies2[0], hobby2 = hobbies2[1];
// const [hobby1, hobby2, ...remainingHobbies] = hobbies2;
console.log(hobbies2, hobby1, hobby2); //[ 'Sports', 'Cooking' ] Sports Cooking
//destructuring Objects
var human2 = {
    name: 'Max',
    age: 28
};
// syntax - const { keyNameFromObject: newName ...}
//not a type assignment
var newName = human2.name, newAge = human2.age;
console.log(newName, newAge, human2); //Max 28 { name: 'Max', age: 28 }
console.log("----------------Array and Object Destructuring-------------------------");
