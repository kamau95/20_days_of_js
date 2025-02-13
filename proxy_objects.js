let target = {
  name: "jane",
  greeting: "hello",
  salamu() {
    console.log("Inside salamu(), this:", this);
    return `${this.greeting} ${this.name}`
  }
}

//empty handler object
let handler1 = {};

let proxy1 = new Proxy(target, handler1);

console.log(proxy1.salamu());

//customize the handler
let handler2 = {
  get(target, prop, receiver) {
    let value = Reflect.get(target, prop, receiver);
    if (typeof value === "function") {
      return value.bind(target);
    }
    return `its today`;
  }
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2.salamu());
console.log(proxy2.name);

//maintaining how the original target is
let handler3 = {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${prop}`);
    let value = Reflect.get(target, prop, receiver);
    if (typeof value === "function") {
      console.log(`Binding function: ${prop}`)
      return value.bind(target);
    }
    return value;
  }
}

let proxy3 = new Proxy(target, handler3);
console.log(proxy3.name, proxy3.salamu(), proxy3.greeting);
