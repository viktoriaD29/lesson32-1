const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value)
    resolve(value)
  }, delay)
})

const asynNum1 = getValueWithDelay(56, 1000)
const asynNum2 = getValueWithDelay(undefined, 2000)
const asynNum3 = getValueWithDelay('10', 3000)

const getSum = numbers => 
  numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asynNumers) => {
  return Promise.all(asynNumers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error('Can\'t calculate')));
};

