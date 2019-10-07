console.log("Start Programming");

var async = require('async')

async.parallel([
        function (callback) {
            setTimeout(function () {
                console.log("First Task=====>");
                callback(null, 1)
            }, 3000)
        },

        function (callback) {
            console.log("second Task=====>");
            callback(null, 2)
        },

        function (callback) {
            setTimeout(function () {
                console.log("Third Task=====>");
                callback(null, 3)
            }, 1000)
        },
    ],
    function (err, result) {
        console.log(result);
    })

console.log("End Programming");


/** OUTPUT :-
Start Programming
second Task=====>
End Programming
Third Task=====>
First Task=====>
[ 1, 2, 3 ] */