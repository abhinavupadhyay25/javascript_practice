//while loops in javascript:
let index = 1;
while (index <= 10) {
  //console.log(`value of index is ${index}`);
  index = index + 2;
}

const myHeroes = ["batman", "superman", "ironman", "hulk", "spiderman"];
let arr = 0;
while (arr < myHeroes.length) {
  //console.log(myHeroes[arr]);
  arr++;
}

//do-while loops in javascript:
let score = 1;
do {
  console.log(`value is ${score}`);
  score++;
} while (score <= 10);

//The main difference between 'while' and 'do-while' loop is the order of condition checking and statement execution. 'While' loop checks the condition before executing the statement(s), 'do-while' loop executes the statement(s) at least once before checking the condition.
