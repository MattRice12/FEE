function isogram(string) {
  var strArr = string.toLowerCase().split('');
  var letters = {}
  count = 0
  for (var i=0;i<strArr.length;i++) {
    if (!letters[strArr[i]]) {
      letters[strArr[i]] = 1
    } else {
      return false
    }
    count++
  }
  return true
}

var aba = 'abA'
var abc = 'abc'
var dermatoglyphics = 'Dermatoglyphics'
var supercalifragilisticexpialidocious = 'supercalifragilisticexpialidocious'
console.log(aba + ':', isogram(aba), count);
console.log(abc + ':', isogram(abc), count);
console.log(dermatoglyphics + ':', isogram(dermatoglyphics), count);
console.log(supercalifragilisticexpialidocious + ':', isogram(supercalifragilisticexpialidocious), count);
