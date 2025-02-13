function* range_numbers(start, end) {
  for( let i = start; i <= end; i++) {
    yield i;
  }
}

function* sequence_numbers() {
  yield* range_numbers(1, 200);
  yield* range_numbers(300, 350);
}
for ( let item of sequence_numbers()) {
  console.log(item);
}
