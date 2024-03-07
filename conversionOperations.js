//Type conversion in javascript

let score = "33";
console.log(typeof score); //string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

let someNumber = 89;
let stringNumber = String(someNumber);
console.log(stringNumber); //89
console.log(typeof stringNumber); //string

let a1 = null;
let convertedA1 = Number(a1); //Number
console.log(convertedA1); //0

let a2 = undefined;
let convertedA2 = Number(a2); //Number
console.log(convertedA2); //NaN

let marks = "67abc";
let convertedMarks = Number(marks);
console.log(typeof convertedMarks); //Number
console.log(convertedMarks); //NaN

let isValue = true;
let otherValue = Number(isValue); //Number
console.log(otherValue); //1

let firstName = "javascript";
let booleanFirstName = Boolean(firstName);
console.log(booleanFirstName); //true

let lastName = "";
let booleanlastName = Boolean(lastName);
console.log(booleanlastName); //false

//Some other operations:

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "3"); // 33
