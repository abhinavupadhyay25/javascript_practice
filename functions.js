//Functions in javascript:

function greet() {
  console.log("hello world");
}

//greet(); //hello world

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2); //30
}

//addTwoNumbers(10, 20);

const result = addTwoNumbers(2, 6);
//console.log("Result: ", result); //undefined

function addTwoNumbers(num1, num2) {
  // let res = num1 + num2;
  // return res;
  return num1 + num2;
}

const response = addTwoNumbers(5, 3);
//console.log("Result: ", response); //8

function userLoginMessage(username = "sam") {
  if (username) {
    return `${username} just logged in`;
  } else {
    console.log("please, enter username");
    return;
  }
}

//console.log(userLoginMessage("Javascript")); //Javascript just logged in
//console.log(userLoginMessage()); //sam just logged in

function calculateCartPrice(...price) {
  return price;
}

//console.log(calculateCartPrice(300, 670, 1200, 345)); //[ 300, 670, 1200, 345 ]

function calculateCartPrice(val1, val2, ...price) {
  return price;
}

//console.log(calculateCartPrice(300, 670, 1200, 345));

const user = {
  userName: "backend",
  price: 1200,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

//handleObject(user);

// handleObject({
//   userName: "sam",
//   price: 234,
// });

const myArr = [100, 200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

//console.log(returnSecondValue(myArr)); //200
