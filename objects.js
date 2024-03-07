//Objects in javascript:

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "example",
  age: 23,
  location: "gurugram",
  email: "example@example.com",
  isLogin: false,
  lastLoginDays: ["monday", "saturday"],
  [mySym]: "myKey1",
};

console.log(jsUser.email); // example@example.com
console.log(jsUser["email"]); // example@example.com
console.log(jsUser[mySym]); // myKey1

jsUser.email = "example@chatgpt.com";
console.log(jsUser.email); // example@chatgpt.com

// Object.freeze(jsUser); // further changes will not propogate
// jsUser.age = 56;
//console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello world");
};

console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting()); //hello world

jsUser.greetingTwo = function () {
  console.log(`hello ${this.name}`);
};

console.log(jsUser.greetingTwo()); //hello example

//Singleton

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.age = 24;
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'sam', age: 24, isLoggedIn: false }
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

const regularUser = {
  email: "sam@google.com",
  fullName: {
    userFullName: {
      firstName: "john",
      lastName: "wick",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName); //john

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 = Object.assign(obj1, obj2);
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//===============================================================================

//Destructuring Objects:

const course = {
  courseName: "Javascript",
  price: 1200,
  language: "hindi",
  courseInstructor: "hitesh",
};

//course.price

const { price, language, courseInstructor: teacher } = course;

console.log(language); //hindi
console.log(price); //1200
console.log(teacher); //hitesh
