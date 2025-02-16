var Calculator = /** @class */ (function () {
    function Calculator() {
        this.arrayHistory = [];
    }
    Calculator.prototype.add = function (a, b) {
        var resultat = a + b;
        this.addHistory("".concat(a, " + ").concat(b, " = ").concat(resultat));
        return resultat;
    };
    Calculator.prototype.subtract = function (a, b) {
        var resultat = a - b;
        this.addHistory("".concat(a, " - ").concat(b, " = ").concat(resultat));
        return resultat;
    };
    Calculator.prototype.multiply = function (a, b) {
        var resultat = a * b;
        this.addHistory("".concat(a, " * ").concat(b, " = ").concat(resultat));
        return resultat;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        var resultat = a / b;
        this.addHistory("".concat(a, " / ").concat(b, " = ").concat(resultat));
        return resultat;
    };
    Calculator.prototype.percent = function (a, b) {
        var resultat = (a * b) / 100;
        this.addHistory("".concat(a, " % ").concat(b, " = ").concat(resultat));
        return resultat;
    };
    Calculator.prototype.getHistory = function () {
        return this.arrayHistory;
    };
    Calculator.prototype.addHistory = function (history) {
        this.arrayHistory.push(history);
    };
    return Calculator;
}());
var calculator = new Calculator();
var inputNumber = document.getElementById("input_text");
var firstOperand = null;
var currentInput = '';
var currentOperation = null;
function appendNumber(a) {
    currentInput += a;
    inputNumber.value = currentInput;
}
function appendOperation(a) {
    console.log('appendOperation');
    if (currentInput === '')
        return;
    if (firstOperand !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    currentOperation = a;
    currentInput = '';
    inputNumber.value = currentInput;
}
function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    currentOperation = null;
    inputNumber.value = '';
}
function deleteLast() {
    inputNumber.value = inputNumber.value.slice(0, -1);
}
function calculateResult() {
    if (currentOperation === null || firstOperand === null || currentInput === '')
        return;
    var secondOperand = parseFloat(currentInput);
    var value;
    console.log("currentOperation", currentOperation);
    switch (currentOperation) {
        case '+':
            value = calculator.add(firstOperand, secondOperand);
            break;
        case '-':
            value = calculator.subtract(firstOperand, secondOperand);
            break;
        case '*':
            value = calculator.multiply(firstOperand, secondOperand);
            break;
        case '/':
            value = calculator.divide(firstOperand, secondOperand);
            break;
        case '%':
            value = calculator.percent(firstOperand, secondOperand);
            break;
        default:
            console.error('error');
            break;
    }
    currentInput = value.toString();
    currentOperation = null;
    firstOperand = null;
    inputNumber.value = currentInput;
    updateHistory();
}
function updateHistory() {
    var historyElement = document.getElementById('ul');
    historyElement.innerHTML = '';
    calculator.getHistory().forEach(function (el) {
        var li = document.createElement('li');
        li.textContent = el;
        historyElement.appendChild(li);
    });
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
