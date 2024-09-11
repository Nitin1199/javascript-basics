let name = {
    firstName: 'Nitin',
    lastName: 'Pal',
    
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + ' from '+ hometown + ' , '+state);
}

printFullName.call(name, "Vapi", 'Gujarat');

// function borrowing
let name2 = {
    firstName: 'Satyam',
    lastName: 'Yadav'
}

printFullName.call(name2, "Ghazhipur", 'Uttar Pradesh');
printFullName.apply(name2, ['GH', 'UP']);

// bind method
let prntName = printFullName.bind(name2,"Valsad", "Gujarat");

prntName();