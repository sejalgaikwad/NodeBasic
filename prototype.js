function Person(ID, first, last, city) {
    this.ID = ID;
    this.firstName = first;
    this.lastName = last;
    this.city = city;
}

var emp1 = new Person(1, "Simran", "kadu", "mumbai");
var emp2 = new Person(2, "komal", "wagh", "Uran");

console.log("Employe ID is", emp1.ID);

//you can not add a new property to an existing object constructor:
Person.salary = 30000;
console.log("Employe Natonality", emp1.salary);

//The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.country = "India"
console.log("Employe live in ", emp1.country);

//The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName
}
console.log("Employe full name " + emp1.fullName());