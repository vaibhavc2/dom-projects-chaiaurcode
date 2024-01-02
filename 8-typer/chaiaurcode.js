const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'Masstt', 'Dhinchak', 'Weird'];
let index = 0;

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function type() {
  for(let ch of words[index]) {
    typedTextSpan.innerText += ch;
    await delay(350);
  }
  await delay(350);
  erase();
}

async function erase() {
  while(typedTextSpan.innerText.length > 0) {
    typedTextSpan.innerText = typedTextSpan.innerText.slice(0, -1);
    await delay(350);
  }
  // using Modulus(div. remainder) in the following way, the code cycles through the words in the array, one by one. After the last word, it goes back to the first word.
  index = (index + 1) % words.length;
  type();
}

type(); // start typing