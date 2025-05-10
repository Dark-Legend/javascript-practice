// Reduce method takes a callback and initialalue as it's arguments
// In callback we have to return accumulator Value which is initial and current value.
// Reduce returns a singal value which is initial value

Array.prototype.customReduce = function (callback, initialValue) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototyp.customReduce called on null or undefined"
    );
  }

  const arr = this;
  let result = initialValue;

  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result = callback(result, arr[i]);
    } else {
      result = arr[i];
    }
  }
  return result;
};
