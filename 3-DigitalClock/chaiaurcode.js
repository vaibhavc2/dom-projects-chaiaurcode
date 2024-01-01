const getCurrentDate = () => {
  const date = new Date().toLocaleTimeString();

  document.getElementById("clock").innerHTML = date;
}

setInterval(getCurrentDate, 1000);