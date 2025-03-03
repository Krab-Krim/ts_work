// generics

// Основные концепции дженериков

// 1.Обобщенные типы
// 2.Типобезопасность
// 3.Переиспользуемость 


//func

function str<T>(arg: T): T{
    return arg
  }
  
  // str<string>("fhhfhfh") - строка
  // str<number>(1212313) - число
  
  
  function aqw<T, U>(fir:T, sec:U): [T,U] {
    return [fir, sec]
  }
  
  aqw<string, number>("age", 30)
  
  // []
  
  function arrFunc<T>(item: T[]): T[] {
    return item.reverse()
  }
  
  arrFunc<number>([1,2,2])
  arrFunc<string>(["njdhsfhj", "ksfihjd"])
  
  //Class 
  
  class Box<T> {
    private value: T
  
    constructor(value: T) {
      this.value = value
    }
  
    getValue(): T {
      return this.value
    }
   }
  
   let box1 = new Box<number>(123);
  let box2 = new Box<string>("Hello");
  
  
  //Ограничения 
  
  interface A {
    length: number
  }
  
  function abc<T extends A>(arg:T):T {
    arg.length
    return arg 
  }
  
  abc("dgfgjsdhfgh")
  abc([1,2,3])
  // abc(5454545) - error
  // abc(true) - error
  
  // _________________________________________________
  
  function add<T extends number | string>(a: T, b: T): T {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b) as T;
    } else if (typeof a === "string" && typeof b === "string") {
        return (a + b) as T;
    }
    throw new Error("Unsupported types");
  }
  
  add(1, 2);
  add("hello", "world")
  // add(true, false); - error
  
  
  //interface 
  
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  let pair: Pair<string, number> = { first: "age", second: 30 }

  ////////////////////////////////////////////////
//   Ответы на возможные вопросы
//   1. Зачем нужны дженерики?
//   Дженерики позволяют писать более универсальный и типобезопасный код. Они помогают избежать дублирования кода и обеспечивают гибкость при работе с разными типами данных.
  
//   2. В чем разница между any и дженериками?
//   any отключает проверку типов, что может привести к ошибкам во время выполнения.
  
//   Дженерики сохраняют типобезопасность, позволяя работать с разными типами данных, но с проверкой типов на этапе компиляции.
  
//   3. Можно ли использовать дженерики с примитивными типами?
//   Да, дженерики можно использовать с любыми типами, включая примитивные (string, number, boolean и т.д.).
  
//   4. Как ограничить типы в дженериках?
//   Используйте ключевое слово extends, чтобы указать, что тип должен соответствовать определенному интерфейсу или иметь определенные свойства.
  //////////////////////////////////

  function identity <T>(value: T): T {
    return value
  }

  identity<boolean>(true)
//

  function reverseArray<T>(array: T[]): T[] {
    return array.reverse()
  }

  reverseArray<number>([55, 0, 6])

//

interface long{
    length: number,
}

function longest<T extends long>(a: T, b: T): T {
    return a.length > b.length ? a : b
}


longest("apple", "banana")
longest([1, 2, 3], [4, 5])
//

interface Pair1<A, B> {
    one: A;
    two: B;
}

class GenericPair<A, B> implements Pair1 <A, B> { 
    constructor(public one: A, public two: B) {

    }
}

const classGenerik = new GenericPair<number, string>(55, 'qweqwe')
///



let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

function merge<A, B>(a: A, b: B): A & B {
    return {...a, ...b}
}


let merged = merge(obj1, obj2);
///

let person = { name: "Alice", age: 30 };

function getProperty<A, B extends keyof A>(obj: A, key: B): A[B] {
    return obj[key];
}

let name = getProperty(person, "name");
let age = getProperty(person, "age");
//

function isEqual<A>(num1: A, num2: A): boolean {
    return num1 === num2;
}


// Пример использования:
console.log(isEqual(5, 5)); // true
console.log(isEqual("hello", "world")); // false
console.log(isEqual({ a: 1 }, { a: 1 })); // false (объекты сравниваются по ссылке)
///////////

class Animal1 {
    constructor(name: string) {

    }
}

class Dog2 extends Animal1 {
    getGav(): void {

    }
}

class Cat extends Animal1 {
    getMyau(): void {

    }
}

function createAnimal<A extends Animal1>(animalClass: new(name: string) => A, name: string): A {
    return new animalClass(name)
}

// const cat = new Cat('x')
// cat.name
const cat = createAnimal(Cat, 'popper')
cat.name
////////////////////////////////////////////

//task work
// task1
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(el => predicate(el) === true)
}

let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = filterArray(numbers1, x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

let words = ["apple", "banana", "cherry"];
let longWords = filterArray(words, word => word.length > 5);
console.log(longWords); // ["banana", "cherry"]
//
//task2
class Storage1<T = string> {
  private store: T

  constructor(store: T) {
    this.store = store;
  }

  setValue(): T {
    return this.store
  }
  getValue(): T {
    return this.store
  }
}
const stringStorage = new Storage();
stringStorage.setValue("Hello, World!");
console.log(stringStorage.getValue()); 

const numberStorage = new Storage<number>();
numberStorage.setValue(42);
console.log(numberStorage.getValue());
//
//task3

enum Car1 {
  model = 'audi',
  year = "2018",
  country = 'germany'

} 
function getEnumValues<T extends object>(a:T): Array<T[keyof T]> {
    return Object.values(a)
}

const carObj = {...Car1}
console.log(getEnumValues(carObj))