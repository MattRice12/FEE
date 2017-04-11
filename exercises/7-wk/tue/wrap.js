function wrap (str, max) {
  let arr = str.split(' ')
  let spacingArr = [];
  let finalArr = []
  arr.forEach((word) => {
    var newWord = word.split('')
    if ((spacingArr.length + newWord.length) <= max) {
      spacingArr += " " + word
    } else {
      finalArr.push(spacingArr)
      spacingArr = word
    }
    if (arr[arr.length -1] === word) {
      finalArr.push(spacingArr)
    }
  })
  return finalArr
}

let stringLong = "Hi there I am matt!!"
let stringShort = "Hey u"
const MAX = 6

let outcomeLong = wrap(stringLong, MAX)
let outcomeShort = wrap(stringShort, MAX)

console.log(outcomeLong);
console.log("\n");
console.log(outcomeShort);
