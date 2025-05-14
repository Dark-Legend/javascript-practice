// apply Polyfill
// Apply Polyfill takes the context and arguments as an array/
// returns calculated result;

Function.prototype.customApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new TypeError(this, "is not a function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError(args, "is not an array");
  }
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

const obj = {
  something: "HEHE",
};
function greet(name, age) {
  return `My name is ${name} and age is ${age}. You don't know me ${this.something}`;
}

console.log(greet.customApply(obj, ["Mohit", 24]));
