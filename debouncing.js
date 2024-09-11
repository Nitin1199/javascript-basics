//debouncing in Javaacript
let counter = 0;
const getData = () => {
    //calls an Api and gets data
    console.log('Fetching data ...', ++counter);
}

const debouce = function (fn, delay) {
    let timer;
    return function() {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }, delay)
    }
}

const betterFunction = debouce(getData, 300);