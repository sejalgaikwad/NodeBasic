var numbers = [ 3, 1 , 22, 1, 25];
var first = numbers.find(myFunction);       //ArrayFind
var index= numbers.findIndex(myFunction)    //ArrayFindIndex

function myFunction(value, index, array) {
  return value > 18
}

myFunction();
console.log("first number greater than 18 in given array :-",first ,"at", index ,"index");
