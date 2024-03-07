//DataTypes available in Javascript:

//Primitive : string,boolean,number,symbol,bigInt,null,undefined

//Non-primitive(reference type) : arrays,objects,functions

let score = 68;

let course = "javascript";

let isPass = true;

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId); //false

// typeof(): gives information about type of variables

console.log(score);

console.log(typeof "javascript"); //string
console.log(typeof isPass); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof id); //symbol
console.log(typeof anotherId); //symbol

const heroes = ["thor", "ironman", "hulk"];
console.log(typeof heroes); //object

let myObj = {
  name: "javascript",
  age: 23,
};
console.log(typeof myObj); //object

const myFunc = function () {
  console.log("hello");
};
console.log(typeof myFunc); //function

//Memory management in javascript:

//Stack: all primitive types uses this, we get copy of the variable which we declared

//Heap: all non-primitive types uses this, we get reference of the original variable which we declared, it means if any change occurs then original variable get affected
