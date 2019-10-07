//ES5 VERSION
// function functionName(arg1, arg2)
// {
//     //body of function
// }

function multiply(x, y) {
    mul = x * y;
}
multiply(2, 3);
console.log("2 multiply by 3 :- ", mul);



//ES6 VERSION
// const functionName=(arg1, arg2)=>{
//     //body of function
// }

const divide = (a, b) => {
    div = a / b;
}
divide(12, 6)
console.log("12 divide by 6 :- ", div);


console.log("/****** to define the return statement in the functions  ********/");

//ES5 VERSION 
// function functionName(args) 
// { 
//     return args  / 2; 
// } 

function Addition(value) {
    return value + 2;
}
a = Addition(10)
console.log("Addition :-", a);

//ES6 VERSION 
//var functionName = (args) => args - 2;

var Substraction = (value) => value - 2;
b = Substraction(12);
console.log("Substraction :-", b);