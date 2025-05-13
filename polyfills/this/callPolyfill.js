const obj = {
  age: 24,
};

Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this, "is not a function");
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function greet(name, lastName) {
  return `My name is $${name} ${lastName} and age is ${this.age}`;
}

console.log(greet.customCall(obj, "mohit", "sharma"));
