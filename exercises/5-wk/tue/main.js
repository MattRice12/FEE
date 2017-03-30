// function arrayOfArrays(num) {
//   let finalArr = new Array()
//   for (let i=1;i<=num;i++) {
//     let arr = new Array()
//     arr.push(i)
//     finalArr.push(arr)
//   }
//   return finalArr
// }
// console.log(arrayOfArrays(3))

function linkedArrays(num) {
  let arr = []
  for (let i=num; i>0; i--) {
    arr = ['hi', arr]
  }
  return arr
}

console.log(linkedArrays(3));
