var fs =require ('fs')

data="Node.js is an open source server environment."

// Create a writable stream
var writeStream = fs.createWriteStream('output.txt')

// Write the data to stream with encoding to be utf8
writeStream.write(data,'utf-8')

// Mark the end of file
writeStream.end()

// Handle stream events --> finish, and error
writeStream.on('Done',function(){
    console.log("Write completed.");
})

writeStream.on('Error',function(err){
    console.log("Error",err);
})

console.log("Programm ended");
