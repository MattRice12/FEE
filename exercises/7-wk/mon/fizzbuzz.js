function fizzBuzz(num) {
  let finalArr = [];
  if (num % 3 === 0) {
    finalArr.push('fizz')
  }
  if (num % 5 === 0) {
    finalArr.push('buzz')
  }
  if (finalArr.length === 0) {
    finalArr.push(num)
  }
  return finalArr.join('')
}

const MAX_NUM = 100;

for (var i=1;i<=MAX_NUM;i++) {
  console.log(fizzBuzz(i));
}
