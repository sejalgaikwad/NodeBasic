var fs = require('fs')

// Asynchronous read
fs.readFile('input.txt',function(err,data)
{
    if(err){
        console.log("Error ", err);
    }
    console.log("Asynchronous read :- ",data.toString());
})

// Synchronous read
var data = fs.readFileSync('input.txt')
console.log("Synchronous read :- ", data.toString());






