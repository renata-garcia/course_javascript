const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add(num1, num2) {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult +  parseFloat(enteredNumber);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
