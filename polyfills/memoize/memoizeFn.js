// Memoize is a technique which reduce the calculations based on the caching.
// If the key exist in this then it won't re-calculate instead will give from cache.

const memoizeFn = function (callback){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
            const result = callback(...args);
            cache[key]  = result;
            return result;
    
    }
};

const sumOfValue = (a,b) => {
    return a+b;
};

const memoize = memoizeFn(sumOfValue);

console.log(memoize(2,2));
console.log(memoize(2,2));