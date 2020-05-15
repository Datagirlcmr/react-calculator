import operate from './operate';

function Calculate(buttonName, calculatorData) {
  let { total, next, operation } = calculatorData;
  const dataNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const dataOperations = ['+', '-', 'x', '%', '÷'];

  const count = (elem, arr) => {
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        sum += 1;
      }
    }
    return sum;
  };

  if (buttonName === '+/-') {
    total = parseFloat(total) * (-1).toString();
  } else if (dataNumbers.includes(buttonName)) {
    if (total === null || total === 'Infinity') {
      total = buttonName;
    } else if (buttonName === '.') {
      const arr = operation ? total.split(operation)[1] : total;
      if (count(buttonName, arr) < 1) {
        total += buttonName;
      }
    } else if (buttonName !== '0' || total !== '0') {
      total += buttonName;
    }
  } else if (dataOperations.includes(buttonName)) {
    if (buttonName !== '%') {
      next = next !== null ? operate(next, total.split(operation)[1], operation) : total;
      operation = buttonName;
      total += buttonName;
    } else {
      total /= 100;
    }
  } else if (buttonName === 'Ac') {
    total = null;
    next = null;
  } else {
    total = operate(next, total.split(operation)[1], operation);
    next = null;
    operation = null;
  }
  return { total, next, operation };
}


export default Calculate;
