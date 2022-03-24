const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");
const previewsOperandTextElement = document.querySelector("[data-previews-operand]");
const allClearButton = document.querySelector("[data-all-clear]");

class Calculator{
    constructor(previewsOperandTextElement, currentOperandTextElement){
        this.previewsOperandTextElement = previewsOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    
clear(){
    this.currentOperand = "";
    this.previewsOperand = "";
    this.operation = undefined;
    }

updateDisplay(){
    this.previewsOperandTextElement.innerText = this.previewsOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const calculator = new Calculator(
    previewsOperandTextElement,
    currentOperandTextElement
);

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

