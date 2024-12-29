class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }

    getDetails() {
        return `Транспортний засіб: ${this.type}, максимальна швидкість: ${this.speed} км/год`
    }
}   

class Car extends Vehicle {
    constructor(type, speed, brand) {
        super(type, speed);
        this.brand = brand;
    }

    getCarInfo() {
        return `Автомобіль: ${this.brand}, максимальна швидкість: ${this.speed} км/год`
    }
}

let myCar = new Car("автомобіль", 220, "Tesla");

console.log(myCar.getDetails());
console.log(myCar.getCarInfo());
