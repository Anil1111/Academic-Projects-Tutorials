"use strict";
console.log("----------------Spread Operator-------------------------");
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const human = {
    name: 'Max',
    age: 28
};
const newHuman = Object.assign({}, human);
console.log(newHuman);
console.log("----------------Rest Paramters-------------------------");
const add4 = (...numbers) => {
    return numbers.reduce((acc, num) => {
        return acc + num;
    });
};
const addedNums = add4(2, 4, 6, 8);
console.log(addedNums);
console.log("----------------Array and Object Destructuring-------------------------");
const hobbies2 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies2;
console.log(hobbies2, hobby1, hobby2);
const human2 = {
    name: 'Max',
    age: 28
};
const { name: newName, age: newAge } = human2;
console.log(newName, newAge, human2);
console.log("----------------Array and Object Destructuring-------------------------");
//# sourceMappingURL=advancedJSTS.js.map