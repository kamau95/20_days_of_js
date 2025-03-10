const user = {
  name: "jane",
  age: 32,
  _password: "0x0x"
}

let handler = {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
};

let proxy = new Proxy(user, handler);

console.log(Object.keys(proxy));

//Object.keys works on enumerable properties only
//solve this by using objectGetOwnPropertyDescriptor()
const user1 = {
  _dateOfRegistration: '2017-03-12T10:12:45.910Z',
  _password: 'justSomeNumbersAndStrings8785fals',
  _userType: 'user',
  name: 'Toby',
  email: 'toby@tobyuser.com',
  age: 29
}

let proxy1 = new Proxy(user1, {
  ownKeys(target) {
    return ["own park", "yawn master", "lawn seater"];
  },

  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true
    }
  }
});
console.log(Object.keys(proxy1));

//checking presence using has trap
let user2 = {
  username: 'anonymous',
  _secret: 'Some secret that should remain hidden.'
}

let proxy2 = new Proxy(user2, {
  has(target, prop) {
    if (prop == "private") {
      return false;
    } else {
      return prop in target
    }
  }
});

console.log("username" in proxy2);
console.log("age" in proxy2);
