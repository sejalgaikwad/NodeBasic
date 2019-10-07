var fs =require ('fs')
var data='';

// Create a readable stream
var readStreams= fs.createReadStream('input.txt')

// Set the encoding to be utf8. 
readStreams.setEncoding('utf-8')

// Handle stream events --> data, end, and error
readStreams.on('data',function(chunk){
    data +=chunk;
});

readStreams.on('end',function(){
    console.log(data);
})

readStreams.on('err',function(err)
{
    console.log(err);
})

console.log("program end");

