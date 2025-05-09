const promise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(time), time);
  });
};
const newPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject("PROMISE REJECTD"), 1000);
  });
};

const promiseArray = [promise(1000), promise(2000), promise(3000)];

// Promise.all Polyfill
// It will accepts multiple promises an array.
// it will iterate over the array of promises call then on it.
// if anyone of the promise fails it will fail all of the promise.

const customPromiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    const promiseArr = [];

    arr.forEach((promise, i) => {
      promise
        .then((data) => {
          promiseArr.push(data);
          if (i === arr.length - 1) resolve(promiseArr);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

customPromiseAll(promiseArray)
  .then((data) => console.log(data))
  .catch((err) => console.log(err, "ERR"));
