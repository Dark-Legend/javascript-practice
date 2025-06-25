Object.prototype.customValues = function (obj) {
  return Object.keys(obj)?.map((key) => obj[key]);
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.customValues(obj));
