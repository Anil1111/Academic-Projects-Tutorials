import _ from "lodash";
//to make lodash work with TS, we need to install the corresponding types package
//then below lodash code which is pure vanilla JS will run on TS

console.log(_.shuffle([1, 2, 3]));

//----------------------
declare var GLOBAL: any; //declare TS variables that you as a developer know will exist
console.log(GLOBAL); //without declaration, will give error as TS does not know it has been defined in the index.html

//--------------------------
import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";

const products = [
  { title: "carpet", price: 14.0 },
  { title: "chair", price: 7.0 },
];

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

//using plainToClass(className, data)
const loadedProducts = plainToClass(Product, products);
console.log(loadedProducts);
// Product {title: "carpet", price: 14}
// Product {title: "chair", price: 7}

for (const prod of loadedProducts) {
  console.log(prod.getInformation()); //now the methods that were originally available only for the class Product is now available for the object too
}

//----------------------
import { validate } from "class-validator";

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation erros");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
