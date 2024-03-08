//Promises in javascript :

/*
JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. Multiple callback functions would create callback hell that leads to unmanageable code. Promises are used to handle asynchronous operations in JavaScript.

Syntax:

let promise = new Promise(function(resolve, reject){
     //do something
});

1. The promise constructor takes only one argument which is a callback function
2. The callback function takes two arguments, resolve and reject
3. Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.

Callback : A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced. Callbacks are an important part of asynchronous JavaScript.

Callback Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 
*/

const promiseOne = new Promise(function (resolve, reject) {
  //do an Async task
  //Database calls, cryptography, Network calls, etc.
  setTimeout(function () {
    console.log("Async task 1");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Async 2 resolved");
});

//==================================================================

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//==================================================================

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "user1", email: "user1@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); //{ username: 'user1', email: 'user1@example.com' }
});

//==================================================================

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "user2", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user); //{ username: "user2", password: "123" }
    return user.username;
  })
  .then((username) => {
    console.log(username); // user2
  })
  .catch((error) => {
    console.log(error); //ERROR: something went wrong
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//==================================================================

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "456" });
    } else {
      reject("Error: error occured");
    }
  }, 1000);
});

//Async & Await

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response); //{ username: 'javascript', password: '456' }
  } catch (error) {
    console.log(error); //Error: error occured
  }
}

consumePromiseFive();
