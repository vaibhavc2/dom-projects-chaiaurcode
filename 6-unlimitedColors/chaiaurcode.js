const body = document.body;
let toChange = false;

document.getElementById("start").addEventListener("click", () => {
  toChange = true;
});
document.getElementById("stop").addEventListener("click", () => {
  toChange = false;
});

setInterval(function() {
  if(toChange) {
  const randomNumber = Math.floor(Math.random() * 999999);
  body.style.backgroundColor = `#${randomNumber}`;
  }
}, 1000);