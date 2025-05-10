// Map takes an callback function.
// return current value, index and whole array in the callback args.
// map return array of the values.

Array.prototype.customMap = function (callback, thisArgs) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customMap called on null or undefined"
    );
  }
  const array = this;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callback.call(thisArgsarray[i], i, array);
  }
  return result;
};
