// Promise.allSettled takes and array of promises.
// it will iterate over the array of promises and will run until all of them are resolved.
// the array will contain the resovled and rejected promises with value and status

const customPromiseAllSettled = (arr) => {
  return new Promise((resolve, reject) => {
    const promiseArr = [];
    let completed = 0;
    arr.forEach((promise, i) => {
      promise
        .then((val) => {
          promiseArr.push({ status: "fulfilled", val });
        })
        .catch((err) => {
          promiseArr.push({ status: "rejected", reason: err });
        })
        .finally(() => {
          completed++;
          if (completed === arr.length) {
            resolve(promiseArr);
          }
        });
    });
  });
};

const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

customPromiseAllSettled(promises).then((val) => console.log(val));
