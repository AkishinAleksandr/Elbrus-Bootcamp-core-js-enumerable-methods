/* function oddNumbers(nums) {
  let odds = []
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 1) {
      odds.push(nums[i]);
    }
  }
  return odds
} */

function oddNumbers(num){
   const filtered = num.filter((el) => el % 2 === 0);
   return filtered;
}

console.log(oddNumbers([4, 44, 80, 19, 1]))

/* function longStrings(strings, minimumLength = 0){
  let longs = []
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length >= minimumLength)
    longs.push(strings[i])
  }
  return longs
}
 */

function longStrings(strings, minimumLength = 3){
   const longStr = strings.filter((el) => el.length >= minimumLength);
   return longStr;
}

console.log(longStrings(['tret', 'tretrewtwter', 'retw', 'rt']))