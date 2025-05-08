class CustomPromise {
  constructor(executor) {
    // Executor function to execute the resolve or reject method which will be passed as argument.
    this.state = "pending"; // promise states pending, fulfilled, rejected
    this.value = undefined; // value will be passed by the user
    this.reason = undefined;
    this.successCallbacks = []; // will store the then callbacks
    this.rejectCallbacks = []; // will store rejected callbacks
    this.finallyCallbacks = undefined; // will store finally callbacks

    const resolve = (val) => {
      // resolve method to resolve the promise it will receive value from user
      if (this.state === "fulfilled") return;
      this.state = "fulfilled"; // changing the state to fulfilled
      this.value = val; // assign the value
      this.successCallbacks.forEach((cb) => cb(val)); // register the val in the successCallbacks;
      if (this.finallyCallbacks) {
        // if finally callback iS there we call it.
        this.finallyCallbacks();
      }
    };

    const reject = (val) => {
      // reject method will have val as argument from user
      if (this.state === "rejected") return;
      this.state = "rejected"; // changing the state to rejected
      this.reason = val; // assign the reason which user has give
      this.rejectCallbacks?.forEach((cb) => cb(val)); // register the val in the callback array of rejectCallbacks
    };

    try {
      executor(resolve.bind(this), reject.bind(this)); // we execute this executor in try and catch by passing resolve and reject
    } catch (err) {
      reject(err);
    }
  }
  then(cbHandler) {
    // call then out of the constructor.
    if (this.state === "fulfilled") {
      cbHandler(this.value); // if the state is fullfiled it should run the callback handler recevied in arguments as if we run it immediately the it will throw error
    } else {
      this.successCallbacks.push(cbHandler); // else we register the cbHandler into successHandler
    }
    return this;
  }

  catchErr(cbHandler) {
    if (this.state === "rejected") {
      // same process as then just registering the cbHandler in rejectCallbacks
      cbHandler(this.reason);
    } else {
      this.rejectCallbacks.push(cbHandler);
    }
    return this;
  }
  finally(cbHandler) {
    // if the state is not pending assign the cbHandler into the finally which will be called in resolve method.
    if (this.state !== "pending") return cbHandler();
    this.finallyCallbacks = cbHandler;
  }
}

const newPromise = new CustomPromise((resolve, reject) => {
  reject("HELLO");
})
  .then()
  .catchErr((err) => console.log(err))
  .finally(() => console.log("FINALLY GETTING CALLED"));
