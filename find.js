// function firstUnder(numbers, limit){
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= limit)
//     return numbers[i]
//   }
// }

function getNumber (numbers, limit){
 const num =  numbers.find((elem) => elem <= limit);
 return num;
  }

   console.log(getNumber([11, 2, 6, 10], 2))

// function startsWith(strings, letter){
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i][0] === letter)
//     return strings[i]
//   }
// }

function getLetter(strings, letter){
    const letterFound = strings.find((el, i) => el[i][0] === letter)
    return letterFound;
}

console.log(getLetter(["ytryt", "ytuyjkk", "hjkjk"], "k"))
