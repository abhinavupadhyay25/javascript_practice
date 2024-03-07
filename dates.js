//Date in javascript

let myDate = new Date();

console.log(typeof myDate); //object

console.log(myDate); // 2024-03-07T06:38:24.309Z

console.log(myDate.toString()); // Thu Mar 07 2024 12:09:33 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Thu Mar 07 2024

console.log(myDate.toLocaleString()); // 7/3/2024, 12:11:05 pm

// myDate.toLocaleString('default',{
//   weekday:"long"
// })

//let myCreatedDate = new Date(2023, 0, 23);
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate = new Date("2023-01-14");
//console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 5:30:00 am

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1709794300244 ms

console.log(myCreatedDate.getTime()); // 1673654400000 ms
