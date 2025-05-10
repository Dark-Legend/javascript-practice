// filter method takes a callback and thisArgs.
// filter pass current value,index and array as args to callback
// return array of elements;

Array.prototype.customFilter = function (callback, thisArgs) {
  if (!Array.isArray(this))
    throw new TypeError(
      "Array.porototyp.customFilter called on null or undefined"
    );

  if (typeof callback !== "function") {
    throw new TypeError(callback, "is not a function");
  }
  const array = this;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback.call(thisArgs, array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};
