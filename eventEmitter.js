var eventEmitter = require('events')

var emitter = new eventEmitter();

// setImmediate(()=>{
// emitter.emit('event');   ////Using setImmediate///
// });

emitter.on('event', function(){
    console.log("event done ");
})

emitter.emit('event');



