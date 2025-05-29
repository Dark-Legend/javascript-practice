// find method takes a callback fn and thisargs.
// Find returns first element for which the condition is met.

Array.prototype.customFind = function (callback, thisArgs) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototyp.customFind is called upon null or undefined"
    );
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback, "is not a function");
  }

  const arr = this;
  let result;

  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArgs, arr[i], i, arr)) {
      result = arr[i];
      break;
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.customFind((val) => val > 3));
