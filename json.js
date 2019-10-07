//JSON.parse():-If you receive data in JSON format, you can convert it into a JavaScript object:

var info = '{  "ID": 1, "firstName":"sejal" , "lastName":"gaikwad" ,"city":"Mumbai" }'
var obj = JSON.parse(info);
console.log(obj);

console.log("***************************************************************************");

//JSON.stringify():-if you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server

 var info ={ID: 1, firstName:"sejal" , lastName:"gaikwad" ,city:"Mumbai"  }
 var obj = JSON.stringify(info);
 console.log(obj);
