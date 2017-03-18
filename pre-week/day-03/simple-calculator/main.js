var output = document.querySelector(".output")
var first = document.querySelector(".first")
var last = document.querySelector(".last")
var calc = document.querySelector(".sub")
console.dir(calc)

// calc.onclick = function action() {
  // output.innerHTML = Number(first.value) + Number(last.value)
// }

calc.addEventListener('click', function() {
  output.innerHTML = Number(first.value) + Number(last.value)
})

calc.addEventListener('click', function() {
  console.log("Great Job!")
})
