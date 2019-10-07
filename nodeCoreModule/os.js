var os = require('os')

// Endianness
console.log('endianness :- ' + os.endianness());

// OS type
console.log('type :- ' + os.type());

// OS platform
console.log('platform :- ' + os.platform());

// Total system memory
console.log('total memory :- ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory :- ' + os.freemem() + " bytes.");

//CPU architecture
console.log('CPU architecture :- ',os.arch());

//operating system platform
console.log('operating system platform :- ',os.platform());