const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 +  num2;
    alert('The result is ' + result);
}

add(1,2);

currentResult = currentResult + 10;

let calculationDescription = `(${defaultResult} + 10)`;

outputResult(currentResult, calculationDescription);
