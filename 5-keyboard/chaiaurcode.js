const resultElement = document.getElementById("insert").children[0];

document.body.addEventListener("keydown", function(e) {
  e.preventDefault();

  resultElement.innerHTML = e.code;
})
