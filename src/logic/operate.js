import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = numberOne !== null ? Big(numberOne) : 0;
  const bigTwo = numberTwo !== null ? Big(numberTwo) : 0;
  let total = 0;

  switch (operation) {
    case '+':
      total = bigOne.plus(bigTwo);
      break;

    case '-':
      total = bigOne.minus(bigTwo);
      break;

    case 'x':
      total = bigOne.times(bigTwo);
      break;

    case '÷':
      if (bigTwo === '0') {
        total = 'Infinity';
      } else {
        total = bigOne.div(bigTwo);
      }
      break;

    case '%':
      total = bigOne.mod(bigTwo);
      break;

    default:
      total = 0;
  }
  return total.toString();
};

export default operate;
