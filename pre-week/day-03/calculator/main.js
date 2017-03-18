var value;
var result = document.querySelector(".output");
var buttons = document.querySelectorAll("#button")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    value = e.target.innerHTML;
    calc();
  });
}

function calc() {
  result.innerHTML = value
};
