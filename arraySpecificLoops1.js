//Here are some Array specific loops in javascript:

//for-of loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}

let greeting = "congrats";
for (const ch of greeting) {
  // console.log(`Character is ${ch}`);
}

//Map

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("PAK", "Pakistan");

//console.log(map);

for (const key of map) {
  //console.log(key);
}

for (const [key, value] of map) {
  //console.log(key);
}

//=========================================================

const myObj = {
  game1: "NFS",
  game2: "spiderman",
};

// for (const [key, value] of myObj) {          TypeError: myObj is not iterable
//   console.log(key, " : ", value);
// }

//for-in loop (generally for objects iteration)

const myObj1 = {
  JS: "Javascript",
  cppp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj1) {
  //console.log(key);          // print all keys
  //console.log(myObj1[key]);  // print all values
  console.log(`${key} is key of ${myObj1[key]}`);
}

const programming = ["C", "C++", "Java", "Python"];
for (const key in programming) {
  console.log(key); //print indexes
  console.log(programming[key]); //print values
}

//for-each loops

//Higher order functions : A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

const sports = ["cricket", "soccer", "hockey", "golf", "archery"];

sports.forEach(function (item) {
  //console.log(item);
});

/*Arrow functions : An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

1. Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
2. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
3. Arrow functions cannot use yield within their body and cannot be created as generator functions.*/

sports.forEach((item) => {
  console.log(item);
});

sports.forEach((item, index, arr) => {
  console.log(item);
  console.log(index);
  console.log(arr);
});

const myCoding = [
  {
    language: "javascript",
    shortcut: "js",
  },
  {
    language: "ruby",
    shortcut: "rb",
  },
  {
    language: "python",
    shortcut: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.language);
});

let result = myCoding.forEach((item) => {
  return item;
});
console.log(result); //undefined , 'forEach' loop do not return anything so we use 'map', 'filter'. 'reduce' methods.
