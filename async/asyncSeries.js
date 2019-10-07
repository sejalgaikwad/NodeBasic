console.log("Program Started");

var async = require('async')

async.series([
        function (callback) {
            console.log("First Task");
            callback(null, 1)
        },

        function (callback) {
            console.log("Second Task");
            callback(null, 2)
        }
    ],
    function (err, result) {
        console.log(result);
    })

console.log("Program Ended");

console.log('*******************************************************************')

console.log("Program Started");

var async = require('async')

async.series([

        function (callback) {
            console.log("First Task");
            callback('error', 1)
        },

        function (callback) {
            console.log("Second Task");
            callback(null, 2)
        }
    ],
    function (err, result) {
        console.log(result);
    })

console.log("Program Ended");


/**
OUTPUT:-
Program Started
First Task
Second Task
[ 1, 2 ]
Program Ended
*******************************************************************
Program Started
First Task
[ 1 ]
Program Ended

 */