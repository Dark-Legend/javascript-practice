// debounce function takes a function and delay as arguments.
// Call that fn with the args using setTimeout after the delay.
// Clear timer before executing the current fn with the new delay.

const debounceFn = function (fn,delay){
    let timer;

    return function(args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this,args);
        },delay);
    }
}

const handleInput = debounceFn((le) => {
  console.log("API call for:", le);
}, 500);

handleInput("Hello");