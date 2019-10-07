class Animal {
    constructor(colorValue) {
        this.color = colorValue;
    }
    greet() {
        console.log(`Hello, My color is ${this.color}`);
    }
}

class Dog extends Animal {
    constructor(colorValue, breedValue) {
        super(colorValue);
        this.breed = breedValue;
    }
    greet() {
        console.log(`Hello, My  breed is ${this.breed} and color is ${this.color}`);
    }
}

var obj1 = new Animal("White")
var obj2 = new Dog("Brown", "pug")

obj1.greet();
obj2.greet();