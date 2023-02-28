import _ from "lodash";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

console.log(_.shuffle([1, 3, 2, 4]));

// declares variables or libraries that don't have type definition files
// declare var Global:string;

const p1 = new Product("A book", 12);

const products = [
  { title: "Pencil", price: 20 },
  {
    title: "Bag",
    price: 15,
  },
  {
    title: "reference",
    price: 40,
  },
];

// const loadedProducts = products.map(
//   (product) => new Product(product.title, product.price)
// );

// Alternation for the above solution
const loadedProducts = plainToInstance(Product, products);

for (const product of loadedProducts) console.log(product.getInformation());
console.log(p1.getInformation());

/// Class Validator

const newProduct = new Product("", -5);

validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProduct.getInformation());
  }
});
