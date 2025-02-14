//implement default values for an object
let numbers = [23, 21, 56];
let proxy = new Proxy(numbers, {
  get(target, prop) {
    if( prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
});

console.log(proxy[1]);
//making sure only numbers are added to an array
let digits =[2,3,4];
digits = new Proxy(digits, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

digits.push(120);
console.log(digits[3]);
digits.push("havet");//causes typeError


