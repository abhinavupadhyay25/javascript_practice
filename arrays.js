//Arrays in javascript:

/*
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

1. JavaScript arrays are resizable and can contain a mix of different data types.
2. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
3. avaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
4. JavaScript array-copy operations create shallow copies.
*/

//First method of declaration of an array:
const myArr = [1, 2, 3, 4, 5];
const myHeroes = ["hulk", "thor", "ironman"];
//console.log(myArr[2]); //3
//console.log(myHeroes[0]); //hulk

//First method of declaration of an array:
const myArr2 = new Array(1, 2, 3, "abc");
//console.log(myArr2[3]); //abc

//Array Methods:

myHeroes.push("spiderman"); //insert value at last index [ 'hulk', 'thor', 'ironman', 'spiderman' ]
myHeroes.pop(); //remove value from last index [ 'hulk', 'thor']
myHeroes.unshift("batman"); //insert value at first index [ 'batman', 'hulk', 'thor', 'ironman' ]
myHeroes.shift(); //remove value from first index [ 'thor', 'ironman' ]

//console.log(myHeroes);

console.log(myArr2.includes(9)); // false
console.log(myArr2.indexOf("abc")); // 3

const newArr = myArr.join(); //converts array to string
console.log(newArr); // 1,2,3,4,5
console.log(typeof newArr); //string

const newN1 = myArr.slice(1, 3); //Returns a copy of a section of an array
console.log(myArr); //[ 1, 2, 3, 4, 5 ]
console.log(newN1); //[ 2, 3 ]

const newN2 = myArr.splice(1, 3); //includes last element and also changes the original array
console.log(myArr); //[ 1, 5 ]
console.log(newN2); //[ 2, 3, 4 ]

//==============================================================================

const marvel_heroes = ["thor", "ironman", "hulk"];
const dc_heroes = ["batman", "superman", "flash"];

//marvel_heroes.push(dc_heroes); //[ 'thor', 'ironman', 'hulk', [ 'batman', 'superman', 'flash' ] ]

const all_heroes = marvel_heroes.concat(dc_heroes); //[ 'thor', 'ironman', 'hulk', 'batman', 'superman', 'flash' ]

const allNewHeroes = [...marvel_heroes, ...dc_heroes]; //[ 'thor', 'ironman', 'hulk', 'batman', 'superman', 'flash' ]

//console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity); //[1,2,3,4,5,6,7,6,7,4,5]
//console.log(realAnotherArray);

console.log(Array.isArray("javascript")); //false
console.log(Array.from("javascript")); //['j','a','v','a','s','c','r','i','p','t']

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
