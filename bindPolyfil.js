let name = {
    firstName: 'Nitin',
    lastName: 'Pal'
};

let printName = function(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName+ ' , '+ hometown+', '+state);
}
// traditional bind method
let printMyName = printName.bind(name, 'Vapi');

printMyName('Gujarat');

Function.prototype.myBind = function(...args) {
    let obj = this;
        params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(name, 'Vapi');
printMyName2('Gujarat');