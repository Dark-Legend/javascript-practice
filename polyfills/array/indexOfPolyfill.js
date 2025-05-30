// IndexOf Polyfill accepts targetElement and startIndex.
// It returns the first fount element index other wise -1;

Array.prototype.customIndexOf = function (searchElement, indexStart = 0) {
  if (!Array.isArray(this)) {
    throw new TypeError(
      "Array.prototype.customIndexOf is called on null or undefined"
    );
  }

  const arr = this;
  let foundIndex;
  for (let i = indexStart; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex || -1;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.customIndexOf(2));
