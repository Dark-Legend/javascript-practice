// forEach Polyfill
// forEach Polyfill will take callback function and thisargs


Array.prototype.customForEach = function (callback) {
    if(!Array?.isArray(this)){
        throw new TypeError(this,"value is null or undefined")
    };

    const arr = this;

    for(let i = 0; i < arr?.length; i++){
        callback(arr[i],i,arr);
    }
};

const arr = [1,2,3,4];

arr.customForEach((element) => console.log(element))