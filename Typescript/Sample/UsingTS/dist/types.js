"use strict";
console.log("----------------Objects-------------------------");
const person2 = {
    name: "max",
    age: 40,
};
const person = {
    name: "max",
    age: 40,
};
console.log(person2.name);
console.log(person.name);
console.log("----------------Arrays-------------------------");
const person3 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
};
let favActivities;
favActivities = ["Sports"];
for (const hobby of person3.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log("----------------TUPLES-------------------------");
const person4 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person4.role.push("admin");
person4.role.push(10);
person4.role.push(30, "newRole");
console.log(person4);
console.log("----------------Enum-------------------------");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person5 = {
    name: "max",
    age: 40,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person5.role === Role.ADMIN) {
    console.log("is an author");
}
console.log("----------------Union Types-------------------------");
function combine(inp1, inp2) {
    let result;
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        result = inp1 + inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
const combinedAges = combine(30, 20);
console.log(combinedAges);
const combinedNames = combine("abc", "def");
console.log(combinedNames);
console.log("----------------Literal Types-------------------------");
function combine1(inp1, inp2, resultConversion) {
    let result;
    if ((typeof inp1 === "number" && typeof inp2 === "number") ||
        resultConversion === "as-num") {
        result = +inp1 + +inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
const combinedAges1 = combine1(30, 20, "as-num");
console.log(combinedAges1);
const combinedStringAges1 = combine1("30", "20", "as-num");
console.log(combinedStringAges1);
const combinedNames1 = combine1("abc", "def", "as-string");
console.log(combinedNames1);
console.log("----------------Type Aliases-------------------------");
function combine2(inp1, inp2, resultConversion) {
    let result;
    if ((typeof inp1 === "number" && typeof inp2 === "number") ||
        resultConversion === "as-num") {
        result = +inp1 + +inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
const combinedAges2 = combine2(30, 20, "as-num");
console.log(combinedAges2);
const combinedStringAges2 = combine2("30", "20", "as-num");
console.log(combinedStringAges2);
const combinedNames2 = combine2("abc", "def", "as-string");
console.log(combinedNames2);
//# sourceMappingURL=types.js.map