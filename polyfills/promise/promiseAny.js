// Promise.any Polyfill
// It will accept array of promises.
// It returns the first resovled promise and reject with aggregator fn if all promise rejects.

const customPromiseAny = (arr) => {
  return new Promise((resolve, reject) => {
    let rejectCount = 0;
    const rejected = [];
    arr.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          rejected.push(err);
          rejectCount++;
          if (rejectCount === arr.length - 1) {
            reject(new AggregateError(rejected, "All promises rejected"));
          }
        });
    });
  });
};

const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success");

customPromiseAny([p1, p2, p3]).then((val) => console.log(val));
