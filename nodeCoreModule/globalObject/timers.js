//setTimeout(cb, ms)
function printHello(){
    console.log("Hello World");
}
var t =setTimeout(printHello,2000)

clearTimeout(t);
console.log("timeOut cleared");


setImmediate(printHello)

setInterval(printHello,2000)


