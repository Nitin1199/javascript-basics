// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// outest()("helloworld")();

// Data hiding

// function counter() {
//     var count = 0;
//     function incrementCount() {
//         count++;
//         console.log(count);
//     }
//     return incrementCount;
// }

// const counter1 = counter();
// counter1();
// counter1();

// const counter2 = counter();
// counter2();

// constructor function
function counter() {
    var count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }

    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

var counter1 =new counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();