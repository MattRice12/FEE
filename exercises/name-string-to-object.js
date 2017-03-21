function names(names) {
  var nameArr = names.split(", ");
  nameObj = nameArr.reduce(function(acc, item) {
    var firstLastArr = item.split(' ')
    var first = firstLastArr[0]
    var last = firstLastArr[1]
    if (!acc[last]) {
      acc[last] = [first];
    } else {
      acc[last].push(first);
    }
    return acc;
  }, {})
  return nameObj;
};

function namesTwo(names) {
  var nameArr = names.split(", ");
  var nameObj = {}
  nameArr.forEach(function(item) {
    var nameSplit = item.split(' ')
    var first = nameSplit[0]
    var last = nameSplit[1]
    if (!nameObj[last]) {
      nameObj[last] = [first]
    } else {
      nameObj[last].push(first)
    }
  })
  return nameObj
}

var result = names("George Washington, Adam West, Kanye West");
var resultTwo = namesTwo("George Washington, Adam West, Kanye West");

console.log(result);
console.log(resultTwo);
