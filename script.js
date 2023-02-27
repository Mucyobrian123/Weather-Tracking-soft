const submitBtn = document.getElementById("submit-btn");
const locationInput = document.getElementById("location-input");
const weatherResults = document.getElementById("weather-results");

submitBtn.addEventListener("click", () => {
  const location = locationInput.value;
  const apiUrl = `http://localhost:3000/posts`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const city = data.name;
      const country = data.sys.country;

      weatherResults.innerText = `The current temperature in ${city}, ${country} is ${temp}°F with ${description}.`;
    })
    .catch(error => {
      console.log(error);
      weatherResults.innerText = "Sorry, we couldn't find the weather for that location.";
    });
});
