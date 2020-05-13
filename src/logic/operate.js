/* eslint-disable keyword-spacing */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  let total = 0;

  switch(operation) {
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
        total = NaN;
      }else {
        total = bigOne.div(bigTwo);
      }
      break;

    default:
      total /= 100;
  }
  return total;
};

export default operate;
