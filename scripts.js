class Calculator {
    constructor(prevOperand, currentOperand) {
        this.prevOperand = prevOperand
        this.currentOperand = currentOperand
        this.clear()
    }

     clear() {
         this.currentOperand = '';
         this.prevOperand = '';
         this.operation = undefined
    };

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    };

    appendNumber(number) {
        if (number === '' && this.currentOperand.incudes('.'))
            return 
        this.currentOperand = this.currentOperand.toString() + number.toString();
    };

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = ''
    };

    compute() {
        
    };

    updateDisplay() {
        this.currentOperand.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const prevOperand = document.querySelector('[data-prev-operand]');
const currentOperand = document.querySelector('[data-current-operand');

const calculator = new Calculator(prevOperand, currentOperand)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})