Object.prototype.customAssign = function (target, ...sources) {
  sources?.forEach((source) => {
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  });
  return sources;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 10, c: 3 };

Object.customAssign(obj1, obj2);

console.log(obj1);
