
let a2: string | number = 12
a2 = ""

// Unknown

let input: unknown = "Hello";

if (typeof input === "string") {
  console.log("cjhjvdfbchjfvjhf")
}

//Object {}

//interface 

interface User {
  name: string
  age: number
  isAdmin: boolean
}

let user33: User = {
  name: "Alice",
  age: 25,
  isAdmin: false
};

user33.name
user33["age"]


user33.isAdmin = false

interface User1 {
    name: string;
    greet: () => void;
}

let user12: User1 = {
  name: "Charlie",
  greet: function() {
      console.log(`Hello, my name is ${this.name}`);
  }
};

user12.greet()



interface User3 {
  name: string
  id: number
  age?: number  // Опциональные свойства
}

let userAdmin: User3 = {name: "Alex", id:1, age:54}
let user123: User3 = {name: "Bob", id:32}


//readonly

interface Point {
  readonly x: number
  readonly y: number
}

let point: Point = {x: 10, y:10}

// point.x = 5 - error


//func



function fhghjdgf (params: User3): void {
  console.log(params)
}

fhghjdgf({name: "Alex", age:12, id: 4545})


// Intersection Types (Типы пересечений)

type Person = {name: string}
type Job = {job: string}

type PersonJob = Person & Job

let user54545: PersonJob = {
  name: "Alex",
  job: "hjgdfhjgdfhj"
}

//Type Assertions (Утверждения типов)

let inputValue:any = "Hello";
let inputValueLength: number = (inputValue as string).length


//Keyof Operator (Оператор keyof)

type Person1 = {
 name: string
 age: number
}

type PersonKey = keyof Person1

let key: PersonKey = "age";

//////////////
interface Person122 {
  name: string;
  age: number;
  isActive: boolean;
}

type PersonKey1 = keyof Person122;
let peroson9: Person122 ={
  name: 'John',
  age: 55,
  isActive: true
}

function getProperty(object: Person122, key: PersonKey1): any{
  return object[key];
}

console.log(getProperty(peroson9, 'name'))
/////


interface Person9 {
  name:string;
  age: number;
}

interface Worker6 extends Person9 {
  jobTitle:string;
}

const newObj: Worker6 = {
  name: 'John',
  age: 55,
  jobTitle: 'asdasd'
}

/////////

interface StringTransformer {
  transform(a:string):string 
}

const fun: StringTransformer = {
  transform(a) {return a.toUpperCase()}
}

console.log(fun.transform('hello world'))

///////////

// interface NumberList extends Array<number>{
//   [index: number]: number
// }

// const arrNum: NumberList = [777, 44, 2, 0]

// function result(arr:NumberList): number {
//   return arr.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(result(arrNum));


// interface NumberList {
//   [index: number]: number
// }

// const arrNum: NumberList = [777, 44, 2, 0]

// function result(arr:NumberList): number {
//   return (arr as number[]).reduce((acc, curr) => acc + curr, 0)
// }

// console.log(result(arrNum));