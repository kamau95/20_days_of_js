let myIterable = {
  name: "trial",
  data: [23, 34, 56],
  [Symbol.iterator]() {
    let index = 0;
    let self = this;
    return {
      next() {
        if (index < self.data.length) {
          return { value: self.data[index++], done: false}
        } else {
          return { value: undefined, done: true};
        }
      }
    }
  }
};

for( let item of myIterable) {
  console.log(item);
}
