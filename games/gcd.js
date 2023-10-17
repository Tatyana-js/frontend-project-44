import game from '../index.js';

import getRandomInt from '../function/getRandomInt.js';

const getMaxDevidor = (numberOne, numberTwo) => {
  const maxNum = Math.max(numberOne, numberTwo);
  let maxDevidor = 1;
  let value1 = numberOne;
  let value2 = numberTwo;
  for (let i = 1; i <= maxNum; i += 1) {
    if (value1 === value2) {
      maxDevidor = value1;
    } else if (value1 > value2) {
      value1 -= value2;
    } else if (value2 > value1) {
      value2 -= value1;
    }
  } return maxDevidor;
};
const playMaxGeneralDivider = () => {
  const numberOne = getRandomInt(100);
  const numberTwo = getRandomInt(100);
  const question = `${numberOne} ${numberTwo}`;
  const answerCorrect = getMaxDevidor(numberOne, numberTwo);
  return [question, answerCorrect];
};
const isMaxGeneralDivider = () => {
  const condition = ('Find the greatest common divisor of given numbers.');
  game(playMaxGeneralDivider, condition);
};
export default isMaxGeneralDivider;
