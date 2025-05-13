// Promise.race polyfill
// Promise.race takes an array of promises.
// It returns the first settled promise whether it is reject or resolves.

const customPromiseRace = (promiseArr) => {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Resolved First");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 50, "Rejected First");
});

customPromiseRace([promise1, promise2])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
