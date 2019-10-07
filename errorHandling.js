var read = require('readline-sync');

function Divide() {

    var Numerator = read.question("enter the Numetator:- ")
    var Denominator = read.question("enter the Denominator:- ")

    try {
        if (Denominator == 0) {
            throw {
                error: "Divide by Zero error",
                message: "Denominator can not be ZERO"
            }
        } else {
            result = Numerator / Denominator
            console.log("Result:- ", result);
        }
    } catch (e) {
        console.log("Error:- ", e.error);
        console.log("Message:- ", e.message);
    }
}

Divide();