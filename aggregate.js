/* function sum(arrayNumbers, sum = 0){
  for (let i = 0; i < arrayNumbers.length; i++ ){
    sum += arrayNumbers[i];
  }
  return sum
} */

function sum(arrayNumbers, sum = 0){
  sum = arrayNumbers.reduce((acc, el) => acc + el);
  return sum;
}

console.log(sum([1, 2, 5, 7]))