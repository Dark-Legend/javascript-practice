Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this, "is not a function");
  }

  context.fn = this;

  return function (...callArgs) {
    return context.fn.apply(context, [...callArgs, ...args]);
  };
};

function greet(name) {
  return `My name is ${name} and age is ${this.age}`;
}

const obj = {
  age: 24,
};

const greetFn = greet.customBind(obj);

console.log(greetFn("Mohit Sharma"));
