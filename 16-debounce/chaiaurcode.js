// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const url = "https://randomuser.me/api/";

const fetchUser = async () => {
  try {
    return await new Promise((resolve, reject) => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
    });
  } catch(error) {
  }
};

const userCard = document.getElementById("user-card");

const name = document.createElement("h2");
const image = document.createElement("img");
const details = document.createElement("p");

image.alt = "Image of the Person";
image.src = "";

userCard.appendChild(name);
userCard.appendChild(image);
userCard.appendChild(details);

const userInput = document.getElementById("user-input");

let lastTimeout;
const debounce = async (delay=500) => {
  if (lastTimeout) clearTimeout(lastTimeout);

  lastTimeout = setTimeout(async () => {
    const user = await fetchUser();
    console.log(user);
    const results = user?.results[0];
    const _name = results?.name;

    const personName = (_name?.title || '') + ' ' + (_name?.first || '') + ' ' + (_name?.last || '');

    name.innerHTML = personName;

    image.src = results.picture?.medium || results.picture?.thumbnail;
    image.alt = personName;

    details.innerHTML = `Sex: ${results.gender}`;
    details.innerHTML += `Age: ${results.dob.age}`;

    userCard.style.display = "block";
  }, delay);
}

userInput.addEventListener("keydown", async () => {
  await debounce();
});