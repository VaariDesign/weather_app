function getWeather() {
  const locationInput = document.getElementById("location-input");
  const weatherDisplay = document.getElementById("weather-display");
  const location = locationInput.value;

  if (location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=12f443c6ca9edf24e299044c55931450&units=metric`)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const humidity = data.main.humidity;
        weatherDisplay.innerHTML = `
          <p>Location: ${location}</p>
          <p>Weather: ${weather}</p>
          <p>Temperature: ${temperature} &deg;C</p>
          <p>Wind Speed: ${windSpeed} km/h</p>
          <p>Humidity: ${humidity}%</p>
        `;
      })
      .catch(error => console.log(error));
  }
}
