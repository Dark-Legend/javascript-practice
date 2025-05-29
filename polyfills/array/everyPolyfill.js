// every method accepts callback and thisArgs arguments.
// every check whether all elements passes the condition in the callback fn.
// If all elements doesn't pass return false otherwise true.

Array.prototype.customEvery = function (callback, thisArgs) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customEvery is called on null or undefined"
    );
  }

  const arr = this;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArgs, arr[i], i, arr)) {
      result?.push(arr[i]);
    }
  }

  return result?.length === arr?.length ? true : false;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.customEvery((val) => val < 7));
