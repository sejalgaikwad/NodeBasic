var buf1 = new Buffer('Abcdefghijklman')
var buf2 =new Buffer(2)

//length Buffer :-
console.log(buf1.length);

//Copy Buffer :-
buf1.copy(buf2);
console.log("Copy Buffer: ",buf2.toString())

//Slice Buffer :-
buf2=buf1.slice(0,5);
console.log("Slice Buffer: ",buf2.toString())


var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
///buf.toString([encoding][, start][, end])
console.log( buf.toString('utf8'));  
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde