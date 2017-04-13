function compress(string) {
  let charArr = string.split('')
  let count = 0;
  let prevChar = charArr[0];
  let finalArr = [];
  charArr.forEach((nextChar, index, array) => {
    if (sameChar(prevChar, nextChar)) {
      count += 1
    } else {
      if (count === 1) {
        finalArr.push(prevChar)
      } else {
        finalArr.push(prevChar + count)
      }
      prevChar = nextChar;
      count = 1
    }

    if (endOfString(index, array)) {
      if (count === 1) {
        finalArr.push(prevChar)
      } else {
        finalArr.push(prevChar + count)
      }
    }
  })
  return finalArr.join('')
}

const sameChar = (prevChar, nextChar) => {
  return prevChar === nextChar
}

const endOfString = (index, array) => {
  return index === array.length - 1
}


function decompress(string) {
  let charArr = string.split('')
  let finalArr = []
  charArr.forEach((nextChar, index, array) => {
    if (nextChar.match(/\D/)) {
      multiplier = 1;
      if (nextIsNum(1, index, charArr)) {
        multiplier = array[index+1]
        if (nextIsNum(2, index, charArr)) {
          multiplier += array[index+2]
        }
      }
      finalArr.push(nextChar.repeat(multiplier));
    }
  })
  return finalArr.join('')
}

const nextIsNum = (num, index, arr) => {
  return (index !== arr.length-num) && arr[index+num].match(/\d/)
}

console.log(compress("aaa"), decompress(compress("aaa")));
console.log(compress("abc"), decompress(compress("abc")));
console.log(compress("aaaabbb"), decompress(compress("aaaabbb")));
console.log(compress("aaaabbbaaaaaaaaaacccccccccdededededeeeee"), decompress(compress("aaaabbbaaaaaaaaaacccccccccdededededeeeee")));
