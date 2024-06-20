let displayElement = document.getElementById('display');
let displayValue = '';

function clearDisplay() {
    displayValue = '';
    displayElement.innerText = '0';
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    displayElement.innerText = displayValue;
}

function appendOperator(operator) {
    if (displayValue === '') return;
    const lastChar = displayValue[displayValue.length - 1];
    if ('+-*/.'.includes(lastChar)) return;
    displayValue += operator;
    displayElement.innerText = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        displayElement.innerText = displayValue;
    } catch (error) {
        displayElement.innerText = 'Error';
        displayValue = '';
    }
}