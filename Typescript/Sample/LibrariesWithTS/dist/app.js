"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
//to make lodash work with TS, we need to install the corresponding types package
//then below lodash code which is pure vanilla JS will run on TS
console.log(lodash_1.default.shuffle([1, 2, 3]));
console.log(GLOBAL); //without declaration, will give error as TS does not know it has been defined in the index.html
//--------------------------
const product_model_1 = require("./product.model");
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const products = [
    { title: "carpet", price: 14.0 },
    { title: "chair", price: 7.0 },
];
// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });
//using plainToClass(className, data)
const loadedProducts = class_transformer_1.plainToClass(product_model_1.Product, products);
console.log(loadedProducts);
// Product {title: "carpet", price: 14}
// Product {title: "chair", price: 7}
for (const prod of loadedProducts) {
    console.log(prod.getInformation()); //now the methods that were originally available only for the class Product is now available for the object too
}
//----------------------
const class_validator_1 = require("class-validator");
const newProd = new product_model_1.Product("", -5.99);
class_validator_1.validate(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log("Validation erros");
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
//# sourceMappingURL=app.js.map