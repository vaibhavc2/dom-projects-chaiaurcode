let guesses = [];
let tries = 10;
const finalResultElement = document.getElementById("finalResult");

document.getElementById("reload").addEventListener("click", function(e) {
  e.preventDefault();

  window.location.reload();
})

document.getElementById("subt").addEventListener("click", function(e) {
  e.preventDefault();

  if(tries === 0) {
    finalResultElement.innerHTML = "Game Over !! Reload to start again!";
    return;
  }

  const guess = document.getElementById("guessField").value;
  guesses.push(guess);
  document.getElementsByClassName("guesses")[0].innerHTML = guesses;

  const randomNumber = Math.floor(Math.random() * 100);

  if(guess === randomNumber) {
    finalResultElement.innerHTML = "Correct Guess !!";
  } else {
    document.getElementsByClassName("lastResult")[0].innerHTML = (--tries);
    finalResultElement.innerHTML = `Incorrect Guess, Random No: ${randomNumber} ! TRY AGAIN !!`;
  }
});
