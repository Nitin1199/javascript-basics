//throttling in javasript
let counter = 0;
const getData = function() {
    console.log('Fetching Data ... ', ++counter);
}

const throttle = function(fn, delay) {
    let flag = true;
    return function() {
        if(flag) {
            const context = this;
            const args = arguments;
            fn.apply(context, args);
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, delay);
    }
}

let betterFunction = throttle(getData, 1000);