function var_variable(){
    var x= 10;
    var x= 20;
    console.log(x);  //20
}
var_variable();

function let_variable(){
    let b= 10;
    let b= 20;
    console.log(b);  //SyntaxError: Identifier 'b' has already been declared
}
let_variable();


function const_variable(){
    const c= 10;
    console.log(c);  //10
    c= 20;
    console.log(c);  //TypeError: Assignment to constant variable.
}
const_variable();



function var_variable1(){
    var x= 10;
    console.log(x);  //10
    if(true){
        var x=11;
        console.log(x); //11
    }
    console.log(x);  //11
}
var_variable1();


function let_variable1(){
    let x= 10;
    console.log(x);  //10
    if(true){
        let x=11;
        console.log(x);  //11
    }
    console.log(x);    //10
}
let_variable1();


function const_variable1(){
    const x= 10;
    console.log(x);  //10
    if(true){
         x=11;         //TypeError: Assignment to constant variable.
        console.log(x);
    }
    console.log(x);
}
const_variable1();





