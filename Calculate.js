// Calculator functionality
let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.value = '';
    } else if (value === '=') {
      if (previousInput && operator && currentInput) {
        currentInput = evaluate(previousInput, operator, currentInput);
        display.value = currentInput;
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput !== '') {
        if (previousInput) {
          currentInput = evaluate(previousInput, operator, currentInput);
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function evaluate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      return num2;
  }
}
