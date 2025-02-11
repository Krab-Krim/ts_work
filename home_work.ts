//task1
const num: number = 11;
const name2: string = 'лошадь';
const active: boolean = false;
const valueNull: null = null;
const valueUndefined: undefined = undefined;
console.log('возраст',num)
console.log('имя',name2)
console.log('активность',active)
console.log('null',valueNull)
console.log('undefined', valueUndefined)
//task2
let arrNum: number[] = [11, 11, 5, 0, 6, 109]
let arrString: string[] = ['имя', "возраст", "пол"]
arrNum.push(999)
arrString.push('локация')
console.log(arrNum)
console.log(arrString)
//task3
const user2: [string, number] = ['макарони', 44];
console.log(user2)
//task4
function arg(a: any): void {
    console.log(a)
}

function arg2(massage: string): never {
    throw new Error(massage)
}

//task5
enum Weekend {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday' 
}
console.log(Weekend.Monday)
//task6
let users: {name: string, age: number} = {
    name: "Луиджи",
    age: 99,
  }
console.log(users)
//task7
const numOfStr: number|string = '55'
console.log(numOfStr)
//task8
const color: 'red'|'green'|'blue' = 'green'
console.log(color)
//task9

let task: any = 5;
console.log(task)
task = 'five';
console.log(task)
//task10
function sms():void {
    console.log('sms message')
}

//task11
function error(message:string ): never {
    throw new Error(message);
  }

//task12
function element(a: string | number) : string | number{
    if(typeof a === 'string') {
        return a.length
    } else {
       return a**2
    }
}
console.log(element('hello world'));
console.log(element(66))
//task13
function element2(argument: "add" | 'subtract', a:number, b:number): number {
    if(argument === 'add'){
        return a + b
    } else {
        return a - b
    }
}

console.log(element2('add', 5, 5))
console.log(element2('subtract', 5, 4))
