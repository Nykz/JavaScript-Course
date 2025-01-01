// classes & objects
class Car {
    // brand = 'Tesla';
    // color = 'red';

    constructor(brand, color) {
        this.brand = brand; // property
        this.color = color; // property
    }

    drive() { // method
        console.log(`Drive ${this.brand} which if of ${this.color} color`);
    }
}

const myCar = new Car('Tesla', 'Blue'); // object
console.log(myCar);
myCar.drive();

const myCar1 = new Car('Maruti', 'white'); // object
myCar1.drive();

// Encapsulation - Hide implementation details and expose only necessary parts.
class BankAccount {
    #balance = 0; // private property

    deposit(amount) {
        this.#balance += amount; // this.balance = this.#balance + amount
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// account.#balance; // error

// Inheritance - One class can inherit properties and methods from another.
class Animal {
    eat() {
        console.log('Eating...');
    }
}

class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}

const dog = new Dog();
dog.eat();
dog.bark();


// Polymorphism - Methods can behave differently based on the object.
class Animal1 {
    speak() {
        console.log('Animal speaks...');
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log('barking...');
    }

    speak() {
        console.log('dog barks...');
    }
}

const dog1 = new Dog1();
dog1.speak(); // dog barks...
dog1.bark();

const animal = new Animal1();
animal.speak(); // Animal speaks...


// Abstraction - Hide complex logic and expose only essentials
class Shape { // Parent class

    constructor() {
        if(this.constructor === Shape) {
            throw new Error('Abstract class cannot be instantiated');
        }
    }

    // abstract method
    area() {
        throw new Error('Method "area" must be implemented');
    }
}

class Circle extends Shape { // child class
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // PI = 3.1416
    }
}

class Rectangle extends Shape { // child class
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.5398

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area()); // 50