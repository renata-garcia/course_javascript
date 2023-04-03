const defaultResult = 0;
let currentResult = defaultResult;
let result; //Global variable

function add(num1, num2) {
    const result = num1 +  num2; //Can access the global variable
    return result; // Once there are a Global variable it is redundant
}

const additionResult = add(1,2);

additionResult = result; //Bad code, bad uses of global variable

currentResult = additionResult + currentResult + 10;

let calculationDescription = `(${defaultResult} + 10)`;

outputResult(currentResult, calculationDescription);
