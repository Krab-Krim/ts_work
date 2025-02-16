//Class

class Animal {
    //Поля 
    name: string
    age: number

    // Конструктор
    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }

    // Методы
    makeSound(): void {
        console.log(this.name)
    }
}


const dog = new Animal("Собака", 3)
dog.makeSound()


//Наследование 

class Dog extends Animal {
    breed: string

    constructor(name:string, age:number, breed: string) {
        super(name, age)
        this.breed = breed
    }

    // Переопределение метода
    makeSound(): void {
        console.log(this.name)
    }

    // Новый метод
    feth():void {
        console.log(this.name) 
    }
}


const myDog = new Dog("Бобик", 5, "Лабрадор");
myDog.makeSound();
myDog.feth();


// Модификаторы доступа
// public — доступен везде (по умолчанию).
// private — доступен только внутри класса. #
// protected — доступен внутри класса и его подклассов.

class Person {
    private id: number;
    public name: string;
    protected age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
    }
}

class Employee extends Person {
    private salary: number;

    constructor(id: number, name: string, age: number, salary: number) {
        super(id, name, age);
        this.salary = salary;
    }

    public getEmployeeDetails(): string {
        return `${this.getDetails()}, Salary: ${this.salary}`;
    }
}

const emp = new Employee(1, "Иван", 30, 50000);


// Абстрактные классы

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    abstract makeSound(): void // Абстрактный метод

    move(a:number): void {   //реализованные методы
        console.log("ghdfhfhfh")
    }
}

// const animal = new Animal("Rex") - error

class Dog extends Animal {
    makeSound(): void {
        console.log("")
    }
}

const dog = new Dog("gfgfh")
dog.makeSound()
dog.move(10)


abstract class Mammal extends Animal {
    abstract feedMilk(): void;
}

class DogAnimal extends Mammal {
    makeSound(): void {
        console.log("Woof!");
    }

    feedMilk(): void {
        console.log("Feeding milk to puppies.");
    }
}


const dogAnimal = new DogAnimal("hfdhfh")



//static
class Counter {
    static count: number = 0;

    static increment(): void {
        Counter.count++;
    }

    static getCount(): number {
        return Counter.count;
    }
}
//////////////////////////////////////////////////////

//class work

class Car {
    brand:string;
    model:string;
    year: number;

    constructor( brand:string, model:string ,year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log('Пошла жара')
    }
}

const myCar = new Car('audi', 'a4', 2018)

    class ElectricCar extends Car {
        batteryLevel: number

        constructor(brand:string, model:string ,year: number, batteryLevel: number) {
            super(brand, model, year)
            this.batteryLevel = batteryLevel
        }

        chargeBattery(a: number): void {
            console.log(this.batteryLevel += a)
        }

        startEngine(): void {
            console.log('побежал ток по жилам')
        }
    }

    class BankAccount {
        private balance: number;

        constructor(balance: number) {
            this.balance = balance
        }


        public deposit(): number {

        }

        public withdraw(): number {
            
        }
        
    }