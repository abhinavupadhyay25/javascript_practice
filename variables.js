"use strict"; //treat all javascript code as newer version

const accountId = 1444553;

let accountEmail = "example@example.com";

var accountPassword = "12345";

accountCity = "Gurugram"; // It is possible, but not recommended

let accountState; //undefined

/*Important points:
1. 'var' and 'let' create variables that can be reassigned another value.
2. 'const' creates "constant" variables that cannot be reassigned another value.
3. developers shouldn't use 'var' anymore. They should use 'let' or 'const' instead. Because of issues in block scope and functional scope.
4. if you're not going to change the value of a variable, it is good practice to use 'const'.
*/

//accountId = 234455; //not allowed because 'accountId is a constant variable
//console.log(accountId);

accountEmail = "example1@example1.com";
accountPassword = "6789";
accountCity = "Jaipur";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

//alert("hello world") : we are using nodeJs, not browser
