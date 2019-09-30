module.exports = function zeros(expression) {
  const expressionArray = expression.split('*');
  let zerosArray = [];
  let slicedArray = expressionArray.map(item => item.slice(0, -1));
  let flagOfTwo = false; 

  slicedArray.forEach((element, index) => {
    if (element[element.length - 1] !== '!'){
      flagOfTwo = true;
      zerosArray[index] = findZerosOfSimpleFactorial(element, 1);
    } else {
      element = element.slice(0, -1);
      if (+element % 2 === 0){
        flagOfTwo = true;
        zerosArray[index] = findZerosOfSimpleFactorial(element, 2);
      } else {
        zerosArray[index] = findZerosOfSimpleFactorial(element, 2);
      }
    }
  });

  if (flagOfTwo === false){
    return 0;
  } else {
    let sumOfZeros = zerosArray.reduce((a, b) => {
      return (parseFloat(a) || 0) + (parseFloat(b) || 0);
    });
    return sumOfZeros;
  }
}

function findZerosOfSimpleFactorial(num, parity){
  let number = num;
  let count = 0;
  while (number >= 5){
    if (number % 25 === 0){
      count += 1;
    }
    if (number % 5 === 0){
      count += 1;
    }
    number -= parity;
  }
  return count;
}
