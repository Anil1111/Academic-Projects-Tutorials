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
console.log(newHuman);

console.log("----------------Rest Paramters-------------------------");

const add4 = (...numbers: number[]) => {
  return numbers.reduce(num => {
    
  });
} ;

const addedNums = add4(2,4,6,8);
console.log(addedNums);

console.log("----------------Rest Paramters-------------------------");


