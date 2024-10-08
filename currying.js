// currying using bind method
// let multiply = function(x,y) {
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByThree = multiply.bind(this, 3);

// multiplyByTwo(5);
// multiplyByThree(5)

// currying using closures
let multiply = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree = multiply(3);
multiplyByThree(5);

