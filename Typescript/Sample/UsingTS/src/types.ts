console.log("----------------Objects-------------------------");
//explicit object declaration
const person2: {
  name: string;
  age: number;
} = {
  name: "max",
  age: 40,
};

//implicit object declaration
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

let favActivities: string[];
// favActivities = 'Sports'; //error as not string[]
favActivities = ["Sports"]; //fine
// favActivities = ['Sports', 1]; //error as 1 not string

// let favActivities: any[];
// favActivities = ['Sports', 1]; //fine

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase()); //toUpperCase will be allowed as Hobby is inferred to be a string
  // console.log(hobby.map()); //error
}

console.log("----------------TUPLES-------------------------");
// We will need to explicitly declare the object for ensuring tuple behaviour for role

const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "max",
  age: 40,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person4.role.push("admin"); //allowed even after explicit decl
person4.role.push(10);
person4.role.push(30, "newRole");
// person4.role[1] = 10; //allowed before explicit declaration
// person4.role = [10, "newAuth", "extra"]; //not allowed
console.log(person4);

console.log("----------------Enum-------------------------");

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR}; //READ_ONLY will then start from 6
// enum Role {ADMIN = 'Admin', READ_ONLY=100, AUTHOR=200}; //READ_ONLY will then start from 6

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

//flexible to combine string and numbers
//use the pipe operator to provide multiple type inputs
function combine(inp1: number | string, inp2: number | string) {
  let result;

  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  } else {
    result = inp1.toString() + inp2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20);
console.log(combinedAges);

const combinedNames = combine("abc", "def");
console.log(combinedNames);

console.log("----------------Literal Types-------------------------");

function combine1(
  inp1: number | string,
  inp2: number | string,
  resultConversion: "as-num" | "as-string"
) {
  let result;

  if (
    (typeof inp1 === "number" && typeof inp2 === "number") ||
    resultConversion === "as-num"
  ) {
    result = +inp1 + +inp2;
  } else {
    result = inp1.toString() + inp2.toString();
  }

  // if(resultConversion === 'as-num'){
  //   result = +result;
  //   // result = parseFloat(result);
  // } else {
  //   result = result.toString();
  // };
  return result;
}

const combinedAges1 = combine1(30, 20, "as-num");
console.log(combinedAges1);
const combinedStringAges1 = combine1("30", "20", "as-num");
console.log(combinedStringAges1);
const combinedNames1 = combine1("abc", "def", "as-string");
console.log(combinedNames1);

console.log("----------------Type Aliases-------------------------");

type Combinable = number | string;
type ConversionDescriptor = "as-num" | "as-string";

function combine2(
  inp1: Combinable,
  inp2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof inp1 === "number" && typeof inp2 === "number") ||
    resultConversion === "as-num"
  ) {
    result = +inp1 + +inp2;
  } else {
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
