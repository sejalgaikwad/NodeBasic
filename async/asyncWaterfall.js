console.log("Start Programs");

var async = require('async')

async.waterfall([

        function (callback) {
            console.log("first task");
            callback(null, 1, 2)
        },

        function (arg1, arg2, callback) {
            console.log("Second Task", arg1, arg2);
            callback(null, 3)
        },

        function (arg1, callback) {
            console.log("Third Task", arg1);
            callback(null, 'final Result')
        }

    ],
    function (err, result) {
        console.log("Main Callback ", result);
    })

console.log("End Programs");


console.log("********************************************************************************************");


async.waterfall([

        function (callback) {
            console.log("first task");
            callback(null, 1, 2)
        },

        function (arg1, arg2, callback) {
            console.log("Second Task", arg1, arg2);
            callback('Error', 3)
        },

        function (arg1, callback) {
            console.log("Third Task", arg1);
            callback(null, 'final Result')
        }

    ],
    function (err, result) {
        console.log("Main Callback ", result);
    })

console.log("End Programs");


/**
 OUTPUT:-
Start Programs
first task
Second Task 1 2
Third Task 3
Main Callback  final Result
End Programs
********************************************************************************************
first task
Second Task 1 2
Main Callback  3
End Programs
 */