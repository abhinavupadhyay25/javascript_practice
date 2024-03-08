//Important methods for iterating on array:

//filter(): JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method.

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNum = myarr.filter((num) => {
  return num > 4;
});

//console.log(newNum); //[ 5, 6, 7, 8, 9 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//const userBooks = books.filter((book) => book.genre === "History");

let userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

//console.log(userBooks);

//map(): JavaScript map() method iterates over an array, applying a callback function to each element, and returns a new array with the results. The map() method does not change the original array, and does not execute the function for empty elements.

const myarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = myarr1.map((val) => val + 10);

//console.log(newArr); // [11, 12, 13, 14, 15,16, 17, 18, 19]

const chainResult = myarr1
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((val) => val >= 40);

//console.log(chainResult); //[ 41, 51, 61, 71, 81, 91 ]

//reduce(): The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.

const myNum = [1, 2, 3, 4, 5];
const myTotal = myNum.reduce(function (acc, currval) {
  //console.log(`accumulator : ${acc}, current value : ${currval}`);
  return acc + currval;
}, 0);

//console.log(myTotal); // 15

const shoppingCart = [
  {
    item: "js Course",
    price: 2999,
  },
  {
    item: "python course",
    price: 1299,
  },
  {
    item: "java course",
    price: 3999,
  },
];

const total = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);
console.log(`Total price : ${total}`); // Total price : 8297
