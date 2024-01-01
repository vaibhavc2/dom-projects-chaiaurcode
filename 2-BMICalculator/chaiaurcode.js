const calculate = (e) => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = (weight/(height * height)) * 100 * 100;
  document.getElementById("results").innerText = "BMI: " + bmi.toFixed(2);
}