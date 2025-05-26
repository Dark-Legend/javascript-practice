Object.prototype.customKeys = function (...obj) {
  const keys = [];

  obj?.forEach((source) => {
    for (let key in source) {
      console.log(key);
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        keys?.push(key);
      }
    }
  });

  return keys;
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.customKeys(obj2));
