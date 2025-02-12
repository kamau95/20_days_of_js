function* printNumbers() {
  yield 4;
  yield 6;
  yield 10;
  return 23
}

let numbers = printNumbers();
/*
let first = numbers.next();
let second = numbers.next();
let three = numbers.next();
let finall = numbers.next();
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
console.log(JSON.stringify(three));
console.log(JSON.stringify(finall));
*/

//generators are iterable
for(let value of numbers) {
  console.log(value);
}

let sequence = [0, ...printNumbers()];
console.log(sequence);
