console.log("----------------Spread Operator-------------------------");

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);


const human = {
  name: 'Max',
  age: 28
};

const newHuman = {...human};
console.log(newHuman); //{ name: 'Max', age: 28 }

console.log("----------------Rest Paramters-------------------------");

const add4 = (...numbers: number[]) => {
  return numbers.reduce((acc: number, num: number) => {
    return acc + num;
  });
} ;

const addedNums = add4(2,4,6,8);
console.log(addedNums);

console.log("----------------Array and Object Destructuring-------------------------");

const hobbies2 = ['Sports', 'Cooking'];

// const hobby1 = hobbies2[0];
// const hobby2 = hobbies2[1];
//or

const [hobby1, hobby2] = hobbies2;
// const [hobby1, hobby2, ...remainingHobbies] = hobbies2;
console.log(hobbies2, hobby1, hobby2); //[ 'Sports', 'Cooking' ] Sports Cooking


//destructuring Objects

const human2 = {
  name: 'Max',
  age: 28
};

// syntax - const { keyNameFromObject: newName ...}
//not a type assignment
const {name: newName, age: newAge} = human2;
console.log(newName, newAge, human2); //Max 28 { name: 'Max', age: 28 }

console.log("----------------Array and Object Destructuring-------------------------");