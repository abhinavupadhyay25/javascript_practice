//for loop in javascript:
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    //console.log("5 is best");
  }
  //console.log(index);
}

for (let i = 0; i < 5; i++) {
  //console.log(`Outer loop ${i}`);
  for (let j = 0; j < 5; j++) {
    //console.log(`Inner loop ${j} Outer loop ${i}`);
  }
}

for (let i = 2; i <= 5; i++) {
  //console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop ${j} Outer loop ${i}`);
    //console.log(i + " * " + j + " = " + i * j);
  }
}

const myHeroes = ["hulk", "ironman", "thor"];

for (let i = 0; i < myHeroes.length; i++) {
  //console.log(myHeroes[i]);
}

//Break and Continue

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is best");
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    //console.log("5 is best");
    continue;
  }
  console.log(i);
}
