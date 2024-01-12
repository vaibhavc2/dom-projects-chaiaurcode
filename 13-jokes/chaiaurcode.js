const url = 'https://api.chucknorris.io/jokes/random';
const jokeField = document.getElementById("display-joke");
let jokeData;

const setJokeData = (data) => jokeField.innerHTML = data.value;

// handle this end point with XMLHttpRequest
const xhr = new XMLHttpRequest();
const fetchRandomJoke_XHR = () => {
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      setJokeData(JSON.parse(this.responseText))
    }
  }
}

// handle this end point with promises

const fetchRandomJoke = async () => {
  try {
    jokeData = await new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
    setJokeData(jokeData);
  } catch(error) {
    jokeField.innerHTML = "Some Error occurred! Try again!!";
    console.log(error);
  }
};

document.getElementById("getJoke-fetch").addEventListener("click", fetchRandomJoke);
document.getElementById("getJoke-xhr").addEventListener("click", fetchRandomJoke_XHR);


// handle the case of race condition
