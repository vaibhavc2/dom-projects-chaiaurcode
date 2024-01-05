const baseURL = 'https://source.unsplash.com/all/300x300';

// this url gives an image. Use this and NO API calls
const image = document.createElement("img");
image.src = baseURL;
image.alt = "random img";
document.querySelector(".content").appendChild(image);

// refresh and get random img
setInterval(() => {
  window.location.reload();
}, 2000)