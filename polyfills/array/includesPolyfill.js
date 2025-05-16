// Includes Polyfills,
// Includes accepts 2 arguments searchElement and fromIndex

Array.prototype.customIncludes = function (searchElement, fromIndex = 1) {
  if (!Array.isArray(this)) {
    throw new TypeError(this, "is null or not defined");
  }
  const arr = this;
  if (arr.length < fromIndex) {
    throw new TypeError(fromIndex, "is greater than array length");
  }
  let i = fromIndex;

  if (i < 0) {
    i = Math.max(arr.length + i, 0);
  }

  for (; i < arr.length; i++) {
    if (arr[i] === searchElement) return true;
  }

  return false;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(1, 0));
