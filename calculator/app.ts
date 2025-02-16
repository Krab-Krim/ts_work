class Calculator {
    private arrayHistory: string[] = [];

    add(a: number, b: number): number { 
        const resultat = a + b;
        this.addHistory(`${a} + ${b} = ${resultat}`);
        return resultat;
    }
    subtract(a: number, b: number): number { 
        const resultat = a - b;
        this.addHistory(`${a} - ${b} = ${resultat}`);
        return resultat;
    }
    multiply(a: number, b: number): number { 
        const resultat = a * b;
        this.addHistory(`${a} * ${b} = ${resultat}`);
        return resultat;
    }
    divide(a: number, b: number): number { 
        if(b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        const resultat = a / b;
        this.addHistory(`${a} / ${b} = ${resultat}`);
        return resultat;
    }
    percent(a: number, b: number): number { 
        const resultat = (a * b) / 100;
        this.addHistory(`${a} % ${b} = ${resultat}`);
        return resultat;
    }
    
    getHistory(): string[] {
      return this.arrayHistory 
    }
    private addHistory(history: string): void {
        this.arrayHistory.push(history);
    }
}
const calculator = new Calculator()

let inputNumber = document.getElementById("input_text") as HTMLInputElement;
let firstOperand: number | null = null;
let currentInput = '';
let currentOperation: string | null = null;
function appendNumber(a:string): void {
    currentInput += a;
    inputNumber.value = currentInput 
}

function appendOperation (a:string): void {
    console.log('appendOperation')
    if(currentInput === '') return
    if(firstOperand !== null) {calculateResult()}
    firstOperand = parseFloat(currentInput);
    currentOperation = a;
    currentInput = '';
    inputNumber.value =  currentInput    
}

function clearDisplay(): void {
    currentInput = '';
    firstOperand = null;
    currentOperation = null;
    inputNumber.value = '';
}

function deleteLast(): void {
    inputNumber.value = inputNumber.value.slice(0, -1)
}

function calculateResult() {
    if(currentOperation === null || firstOperand === null || currentInput === '') return 
const secondOperand: number = parseFloat(currentInput)
let value:number
console.log("currentOperation",currentOperation)
    switch (currentOperation) {
        case '+':
        value = calculator.add(firstOperand, secondOperand) 
            break;
            case '-':
        value = calculator.subtract(firstOperand, secondOperand) 
            break;
            case '*':
        value = calculator.multiply(firstOperand, secondOperand) 
            break;
            case '/':
        value = calculator.divide(firstOperand, secondOperand) 
            break;
            case '%':
        value = calculator.percent(firstOperand, secondOperand) 
            break;
    
        default:
            console.error('error')
            break;
    }

    currentInput = value.toString();
    currentOperation = null;
    firstOperand = null;
    inputNumber.value =  currentInput;    
    updateHistory()
}

function updateHistory(): void {
    const historyElement = document.getElementById('ul') as HTMLElement
    historyElement.innerHTML = '';
    calculator.getHistory().forEach( el => {
        const li = document.createElement('li');
        li.textContent = el;
        historyElement.appendChild(li)
    })
}

// class Calculator {
//     add(a: number, b: number): number { 
//         return a + b;
//     }
//     subtract(a: number, b: number): number { 
//         return a - b;
//     }
//     multiply(a: number, b: number): number { 
//         return a * b;
//     }
//     divide(a: number, b: number): number { 
//         return a / b;
//     }
// }

// const calculator = new Calculator()

// function button123(): void {
//     const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
//     const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
//     const select = (document.getElementById('select') as HTMLSelectElement).value;
//     let value: number;
//     switch (select) {
//         case 'add': 
//         value = calculator.add(num1, num2);
//             break;
//             case 'subtract':
//         value = calculator.subtract(num1, num2);
//             break;
//             case "multiply":
//         value = calculator.multiply(num1, num2);
//             break;
//             case "divide":
//         value = calculator.divide(num1,num2)
//             break;
    
//         default:
//             console.error('error')
//             break;
//     }
//     document.getElementById('resultat')!.textContent = value.toString()
// }