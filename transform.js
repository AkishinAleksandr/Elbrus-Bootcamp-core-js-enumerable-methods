/* function exclamations(strings){
  let loudStrings = []
  for (let i = 0; i < strings.length; i++) {
  loudStrings.push(strings[i].toUpperCase() + '!')
  }
  return loudStrings
}
 */

function exclamations(strings){
   const upper = strings.map((el) => el.toUpperCase() + '!');
   return upper;
}

console.log(exclamations(['rretwre', 'rwetre', 'rt']))

/* function squareAll(numbers){
  let squares = []
  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i]**2)
  }
  return squares
} */

function squareAll(numbers){
  const squares = numbers.map((el) => el * 2);
  return squares;
}

console.log(squareAll([4, 5, 2, 1, 0]))

/* function firstLetters(words){
  let letters = []
  for (let i = 0; i < words.length; i++) {
     letters.push(words[i][0])
  }
  return letters
} */

function firstLetters(words){
   const letter = words.map((el) => el[0]);
   return letter;
}

console.log(firstLetters(['rtre', 'rewtretre', 'rt', 'ertrew']))
