// Get the DOM elements
const inputElement = document.getElementById('input');

// Define variables
let input = '';
let result = null;
let operator = null;

// Append a value to the input field
function appendToInput(value) {
    input += value;
    inputElement.value = input;
}

// Clear the input field
function clearInput() {
    input = '';
    inputElement.value = '0';
}


// Perform the calculation
function calculate() {
    if (operator && input) {
        const num1 = parseFloat(result);
        const num2 = parseFloat(input);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        input = '';
        inputElement.value = result;
    }
}

// Perform the operation
function operate(op) {
    if (input) {
        if (result === null) {
            result = input;
        } else {
            calculate();
        }
    }
    operator = op;
    input = '';
}
