Object.prototype.customEntries = function (obj) {
  return Object.keys(obj)?.map((key) => [key, obj[key]]);
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const objArr = Object.customEntries(obj);

console.log(objArr?.map(([key, value]) => value));
