// number

let age1: number = 25;
let price: number = 9.99;

// string

let afghfg: string = "Alice";
let greeting: string = `Hello, ${name}!`;

// boolean

let isActive: boolean = true;
let isCompleted: boolean = false;

// null и undefined

let emptyValue: null = null;
let notDefined: undefined = undefined;

// Массивы

let numbers: number[]  = [1,2,3]
let names: Array<string> = ["Alex", "Bob"]

// Кортежи (Tuples)
let use: (number | string)[] = ["Alex" , 25]
let user: [string, number] = ["Alice", 25];

// Any

let str: any = "gdhghdgf"
str = 12


// void - не возвращают значение
function sum(): void {
  console.log("This is a message");
}

// Never - никогда не завершаются

function throwError(message:string ): never {
  throw new Error(message);
}

// function 

let a: number = 2;
let b: number = 2;

function sum1(a: number, b: number):number {
  return a + b;
} 

// Enum (Перечисления) - Позволяет задавать именованные константы

enum Users {
  Admin,
  User
}

let user1: Users = Users.Admin

// Object

let user3: {name: string, age: number} = {
  name: "Alex",
  age: 23,
}

// Union Types 
let id3: string | number | boolean = "123"
id3 = 123;
id3 = true


// Literal Types

let age2: 1 | 2 | 3 | 4 = 3
let direction: "left" | "right" | "up" | "down" = "left";

