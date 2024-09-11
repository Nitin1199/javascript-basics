const users = [
    { firstName: "nitin", lastName: "pal", age: 22 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "depika", lastName: "padukone", age: 22 },
]

//list of full name
const output = users.map((user) => {
    return user.firstName + " "+ user.lastName;
})

// console.log(output);

// acc = { 22: 2, 50:1, 75: 1}

const reduced = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{})

// console.log(reduced);

// first name of all user whose age < 30;

const result = users.filter(user => user.age < 30 ).map(user => user.firstName);

// console.log(result);

// using reduce

const nameReduced = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log(nameReduced);