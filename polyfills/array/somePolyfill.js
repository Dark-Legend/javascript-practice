// some method accepts callback and thisArgs as their arguments.
// some checks atleast one element if matches the condition of the callback function
// If not matches then returns true else false.

Array.prototype.customSome = function (callback, thisArgs) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customSome is called on null or undefined"
    );
  }

  const arr = this;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArgs, arr[i], i, arr)) {
      result?.push(arr[i]);
    }
  }

  return result?.length ? true : false;
};

const arr = [1, 2, 3, 4, 5];
