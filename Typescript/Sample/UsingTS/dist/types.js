"use strict";
console.log("----------------Objects-------------------------");
var person2 = {
    name: "max",
    age: 40,
};
var person = {
    name: "max",
    age: 40,
};
console.log(person2.name);
console.log(person.name);
console.log("----------------Arrays-------------------------");
var person3 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
};
var favActivities;
favActivities = ["Sports"];
for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log("----------------TUPLES-------------------------");
var person4 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author']
};
console.log("----------------Enum-------------------------");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person5 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person5.role === Role.ADMIN) {
    console.log('is an author');
}
console.log("----------------Union Types-------------------------");
function combine(inp1, inp2) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number') {
        result = inp1 + inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
var combinedAges = combine(30, 20);
console.log(combinedAges);
var combinedNames = combine('abc', 'def');
console.log(combinedNames);
console.log("----------------Literal Types-------------------------");
function combine1(inp1, inp2, resultConversion) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number' || resultConversion === 'as-num') {
        result = +inp1 + +inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    ;
    return result;
}
var combinedAges1 = combine1(30, 20, 'as-num');
console.log(combinedAges1);
var combinedStringAges1 = combine1('30', '20', 'as-num');
console.log(combinedStringAges1);
var combinedNames1 = combine1('abc', 'def', 'as-string');
console.log(combinedNames1);
console.log("----------------Type Aliases-------------------------");
function combine2(inp1, inp2, resultConversion) {
    var result;
    if (typeof inp1 === 'number' && typeof inp2 === 'number' || resultConversion === 'as-num') {
        result = +inp1 + +inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    ;
    return result;
}
var combinedAges2 = combine2(30, 20, 'as-num');
console.log(combinedAges2);
var combinedStringAges2 = combine2('30', '20', 'as-num');
console.log(combinedStringAges2);
var combinedNames2 = combine2('abc', 'def', 'as-string');
console.log(combinedNames2);
//# sourceMappingURL=types.js.map