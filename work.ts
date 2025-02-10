const age: number = 32;

const name1: string = 'Алихандро';

const isStudent: boolean = true;

const scores: number[] = [3, 4, 3, 3, 5, 2, 3]

function add (a: number, b: number): number {
    return a + b
}

function greet (name:string) : string {
    return name
}

function isAdult (age:number) : boolean {
    if (age >= 18){
        return true
    } else {
        return false
    }
}

let id: number | string;

function printId (id:number | string): void {
    console.log(id)
}


type Status = 'active'|'inactive'|'pending'
let status1 : Status;


function setSatus (statusNmae: Status): void {
    console.log(status1 = statusNmae)
}

function fetchData(url: string, callback: (data: any)=> void): void {
    const data = {}
    callback(data)
}

fetchData('http://localhost/', data => console.log(data))



let array: number[] = [51, 55, 1, 5666, 66, 0]
array.push(11)
array.pop()
array.indexOf(55)
const new1 = array.filter(x => x > 10)
const arrStr = array.map(x => x.toString())