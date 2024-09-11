const arr = [5, 1, 3, 2, 6];

function double (value) {
    return 2 * value;
}

function triple (value) {
    return 3 * value;
}

function binary(value) {
    return value.toString(2);
}

// const output = arr.map(binary);
function isOdd (x) {
    return x % 2;
}

// const output = arr.filter(isOdd);

// reduce
const output = arr.reduce(function (acc, curr) {
    acc = curr > acc ? curr : acc;
    return acc;
}, 0);

console.log(output);