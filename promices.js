var promise = new Promise(function (resolve, reject) {
    var x = 10;
    var y = 10;
    if (x == y) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(function () {
        console.log("success");
    })
    .catch(function () {
        console.log("error");
    });