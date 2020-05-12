import operate from './operate';

function Calculate(calculatorData, buttonName) {
  // eslint-disable-next-line prefer-const
  let { total, next, operation } = calculatorData;
  const dataNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const dataOperations = ['+', '-', 'x', '÷', '%'];

  if (buttonName === '+/-') {
    total *= -1;
  } else if (dataNumbers.includes(buttonName)) {
    total += buttonName;
  } else if (dataOperations.includes(buttonName)) {
    total = operate(total, next, operation);
  }

  return { total, next, operation };
}

export default Calculate;
