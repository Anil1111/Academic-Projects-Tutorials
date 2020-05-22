console.log("-------------------Generics----------------------");

const names10: string[] = ["Rich", "Abraham"];
const names11: Array<string> = ["Rich", "Abraham"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 1000);
});

promise.then((data) => {
  data.split("");
});

console.log("-------------------Generic Function----------------------");

function merge(objA: Object, objB: Object) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Rich" }, { age: 20 });
// mergedObj.name; //error as TS only knows merge returns an object

//one way to solve the error is by typecasting the mergedObj or

//telling TS that both objects will return different types and the result will be an intersection of those types
function merge2<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Rich" }, { age: 20 });
console.log(mergedObj2.name); //name is now available

//Types are set dynamically and we can reuse merge2 as it takes any 2 objects as argument
function merge3<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj3 = merge2({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj3); //name is now available

//not necessary to provide the return type as TS automatically infers
const mergedObj4 = merge2<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Rich", hobbies: ["Sports"] },
  { age: 20 }
);

console.log("-------------------Constraints----------------------");

const mergedObj5 = merge2({ name: "Rich", hobbies: ["Sports"] }, 30);
console.log(mergedObj5); //does not show 30 as it is not an object

//to provide constraints on function declaration

function merge4<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// const mergedObj6 = merge4({name: 'Rich', hobbies: ['Sports'] }, 30 );
//we get an error as now we extended T and U to be an object
const mergedObj6 = merge4({ name: "Rich", hobbies: ["Sports"] }, { age: 20 });
console.log(mergedObj6); //name is now available

console.log(
  "-------------------Another Generic Function----------------------"
);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element`;
  }
  return [element, descriptionText];
}

console.log(countAndPrint("HI there!"));
console.log(countAndPrint(["Sports", "Cooking"]));
console.log(countAndPrint([]));
// console.log( countAndPrint(10)); //error as type number

console.log("-------------------'keyOf Constraint'----------------------");

function extractAndConvert(obj: Object, key: string) {
  //  return 'Value of' + obj[key];  //error as TS does not infer that key of the object will return a value or not
}
console.log(extractAndConvert({}, "name")); //Value of undefined

//solution
function extractAndConvert2<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value of " + obj[key]; //error as TS does not infer that key of the object will return a value or not
}
console.log(extractAndConvert2({ name: "Rich" }, "name")); //Value of undefined

console.log("-------------------'Generic Classes'----------------------");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return; //guard to ensure that if object are provided, then last element of array is not removed everytime
    } else {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Rich");
textStorage.addItem("Samson");
textStorage.addItem("Abr");
textStorage.removeItem("Abr");
console.log(textStorage.getItems());

const numbStorage = new DataStorage<number>();
numbStorage.addItem(10);
numbStorage.addItem(20);
numbStorage.addItem(30);
numbStorage.removeItem(20);
console.log(numbStorage.getItems());

//objects or arrays are reference types
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: "Rich" });
objStorage.addItem({ name: "Abr" });
objStorage.addItem({ name: 'karl' });
objStorage.removeItem({ name: "Abr" }); //brand new object and therefore it has a different reference memory/address, so indexOf cannot find the object and returns -1, and removes last element from end of array
console.log(objStorage.getItems());

//solution 1 is by assigning the same object in memory
const myObj = {name: 'doom'};
objStorage.addItem(myObj);
console.log(objStorage.getItems());
objStorage.removeItem(myObj);
console.log(objStorage.getItems());

//solution 2 is by extending in the class

class DataStorage2<T extends string | boolean | number> {
  //write all the code as above
}


console.log("-------------------Generic Utility Types ----------------------");
//These types are only present in TS, and provides higher type safety

//Partial Type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  //Partial is a type that is also of object type but wraps itself on CourseGoal and makes its properties optional and therefore can be assigned {} and will ultimately return type of courseGoal
  //Partial can be used in cases where you want to temporarily make all the properties of an interface optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}


//Readonly Type
// can be used on an object too

const names: Readonly<string[]> = ['Rich', 'Anna'];
// names.push('Manu'); //notallowed
// names.pop(); //not allowed


console.log("------------------- Generic Types vs Union Types----------------------");

//rewriting datastorage as union type
//  With Union we say that we can have a mix of the given types but with T extends types, we say that only that type can be used
//Generics are used to lock the types used in methods whereas union types provide flexibility

//Below will return an error as Union type cannot be used
/* 
class DataStorage3 {
  private data: (string[]|boolean[]|number[]) = [];

  addItem(item: (string|boolean|number)) {
    this.data.push(item);
  }
  removeItem(item: (string|boolean|number)) {
    if (this.data.indexOf(item) === -1) {
      return; //guard to ensure that if object are provided, then last element of array is not removed everytime
    } else {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }
  getItems() {
    return [...this.data];
  }
}
 */


console.log("------------------- ----------------------");

