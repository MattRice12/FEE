function nothingShort(arr, func) {
  let newArr = []
  arr.forEach(function(item) {
    if (func(item)) {
      newArr.push(item)
    }
  })
  return newArr;
}

console.log(nothingShort(['watermelon', 'apple', 'pear', 'cat'], (word) => word.length <= 4));
