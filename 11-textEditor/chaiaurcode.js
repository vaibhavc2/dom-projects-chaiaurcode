const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

const capitalize = (input) => {
  return input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
}

const formString = (words) => {
  let result = "";
  words.forEach((word) => result += word + " ");
  return result;
}

document.querySelector(".btn.uppercase").addEventListener("click", (e) => {
  e.preventDefault();
  outputField.classList.remove("bold", "italic", "underline");

  const inputString = inputField.value;

  outputField.innerHTML = inputString.toUpperCase();
});

document.querySelector(".btn.lowercase").addEventListener("click", (e) => {
  e.preventDefault();
  outputField.classList.remove("bold", "italic", "underline");

  const inputString = inputField.value;

  outputField.innerHTML = inputString.toLowerCase();
});

document.querySelector(".btn.capitalize").addEventListener("click", (e) => {
  e.preventDefault();
  outputField.classList.remove("bold", "italic", "underline");

  const inputString = inputField.value;

  const words = [];
  let currentWord = "";
  for(let i = 0; i < inputString.length; ++i) {
    if (i === inputString.length - 1) {
      currentWord += inputString[i];
      words.push(capitalize(currentWord));
      currentWord = "";
    } else if(inputString[i] === " " && currentWord.length > 0) {
      words.push(capitalize(currentWord));
      currentWord = "";
    } else if (inputString[i] === " ") {
      continue;
    } else {
      currentWord += inputString[i];   
    }
  }

  console.log(words);
  // console.log(formString(words));
  outputField.innerHTML = formString(words);
});

document.querySelector(".btn.capitalize-first").addEventListener("click", (e) => {
  e.preventDefault();
  outputField.classList.remove("bold", "italic", "underline");

  const inputString = inputField.value;

  outputField.innerHTML = capitalize(inputString);
});

document.querySelector(".btn.bold").addEventListener("click", (e) => {
  e.preventDefault();
  const inputString = inputField.value;
  outputField.classList.remove("italic", "underline");
  outputField.classList.add("bold");
  outputField.innerHTML = inputString;
});

document.querySelector(".btn.italic").addEventListener("click", (e) => {
  e.preventDefault();
  const inputString = inputField.value;
  outputField.classList.remove("bold", "underline");
  outputField.classList.add("italic");
  outputField.innerHTML = inputString;
});

document.querySelector(".btn.underline").addEventListener("click", (e) => {
  e.preventDefault();
  const inputString = inputField.value;
  outputField.classList.remove("italic", "bold");
  outputField.classList.add("underline");
  outputField.innerHTML = inputString;
});

document.querySelector(".btn.bold.italic.underline").addEventListener("click", (e) => {
  e.preventDefault();
  const inputString = inputField.value;
  outputField.classList.remove("italic", "bold", "underline");
  outputField.classList.add("italic", "bold", "underline");
  outputField.innerHTML = inputString;
});
