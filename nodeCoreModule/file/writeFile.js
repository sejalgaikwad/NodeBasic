var fs =require('fs')
fs.writeFile('output.txt',"Java is simple lang",function(err)
{
    if(err){
        return console.log(err);
    }
    console.log("Data written successfully!");
   console.log("Let's read newly written data");

   fs.readFile('output.txt',function(err,data)
   {
       if(err){
           console.log(err);
       }
       console.log(data.toString());
   });
});


