function isPalindrome(string) {
  var original = string.replace(/\W/g, "")
  var first = original.split('').reverse().join('')
  var second = original
  return console.log(string + ':', first === second)
}

isPalindrome( "apple" )
isPalindrome( "javascript" )
isPalindrome( " god  dog" )
isPalindrome( "Taco Cat 47" )
