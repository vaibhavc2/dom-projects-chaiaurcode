const url = 'https://api.thecatapi.com/v1/images/search';

let lastController;
const fetchRandomCat = async () => {
  try {
    if(lastController) lastController.abort();
    const currentController = new AbortController();
    const signal = currentController.signal;
    lastController = currentController;
    imgData = await new Promise((resolve, reject) => {
      fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
    });
    console.log(imgData);
    return imgData;
  } catch(error) {
    console.log(error);
  }
};

const randomCatsContainer = document.querySelector(".container");
const catsContainer = document.createElement("div");
catsContainer.classList.add("random_cats");
const imageContainer = document.createElement("div");
imageContainer.classList.add("cats");

randomCatsContainer.appendChild(catsContainer);
catsContainer.appendChild(imageContainer);

document.getElementsByClassName("btn")[0].addEventListener("click", async (e) => {
  e.preventDefault();

  
  const image = document.createElement("img");
  
  const imgData = await fetchRandomCat();
  
  image.src = imgData[0].url;
  image.alt = "A cat";
  
  
  imageContainer.appendChild(image);
});