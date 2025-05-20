// Throttle is a kind of mechanism which limits the number of function calls should be made in a particular time.
// Throttle function will accept a callback function and the time after which it should run.

const throttle = function (callback,time) {
    let lastTime = 0;
    return function(...args){
        const currentTime = Date.now();
        if(currentTime - lastTime >= time){
            console.log("Running")
            lastTime = currentTime;
            callback(...args)
        }
    }
};

const sayName = () => console.log("Hello");

const greet = throttle(sayName,10000);

console.log(greet());