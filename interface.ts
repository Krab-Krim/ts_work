//Интерфейс

//1.Интерфейс для класса

interface Animal1 {
    name: string;
    makeSound(): void;
}

class Dog1 implements  Animal1 {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    makeSound(): void {
        console.log("")
    }
} 

const dog1 = new Dog1("gfgfh")
dog1.makeSound()

//2.Интерфейс для объекта

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }

  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
  };


//3.Опциональные свойства

interface User1 {
    id: number;
    name: string;
    email?: string; // Опциональное свойство
  }
  
  const user1: User1 = {
    id: 1,
    name: "John Doe",
  };
  
  const user2: User1 = {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

//4.Интерфейс для функции

interface AddFunction {
    (a: number, b: number): number;
  }

  const add: AddFunction = (a, b) => {
    return a + b;
  };

  //5. Интерфейс для массива

  interface StringArray {
    [index: number]: string;
  }  

  const fruits: StringArray = ["Apple", "Banana", "Cherry"];

  //6.Расширение интерфейсов

  interface Person {
    name: string;
    age: number;
  }

  interface Employee extends Person {
    employeeId: number;
  }

  const employee: Employee = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
  };

  //7.Интерфейс с индексными свойствами
  interface Dictionary {
    [key: string]: string;
  }

  const colors: Dictionary = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };

  colors["red"]

  //8. Гибридные интерфейсы
  
  interface Counter {
    (start: number): void;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  const c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

//9. Интерфейс для readonly свойств

interface Point {
    readonly x: number;
    readonly y: number;
  }
  
  const point: Point = { x: 10, y: 20 };