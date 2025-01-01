/*
Location-based Weather App
Problem: Create a simple weather application that fetches the user's location using the Geolocation API and then uses that location to display the current weather from a weather API (such as OpenWeatherMap). The user should be able to see their city name, temperature, and weather description based on their current location.
Steps:
1. Use the Geolocation API to get the user's current latitude and longitude.
2. Fetch weather data from a weather API (like OpenWeatherMap) using the Fetch API and the coordinates.
3. Display the weather data on the page.
*/

const API_KEY = "YOUR_API_KEY";
const weatherInfo = document.getElementById("weatherInfo");
const error = document.getElementById("error");

function getWeather() {
  clearContent();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      fetchWeatherData,
      handleGeolocationError
    );
  } else {
    displayError("Geolocation is not supported by this browser");
  }
}

async function fetchWeatherData(position) {
  try {
    console.log(position);

    const { latitude, longitude } = position.coords;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    displayWeatherData(data);
  } catch (error) {
    displayError("Failed to fetch weather data.");
  }
}

function displayWeatherData(data) {
  const {
    name: city,
    main: { temp: temperature },
    weather,
  } = data;
  const weatherDescription = weather[0].description;

  weatherInfoElement.innerHTML = `
      <strong>City:</strong> ${city}<br>
      <strong>Temperature:</strong> ${temperature}°C<br>
      <strong>Weather:</strong> ${weatherDescription}
    `;
}

function handleGeolocationError(error) {
  let errorMessage = "Unknown error occured!";
  console.log(error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = "User denied the request for Geolocation";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = "Locaiton information is unavailable";
      break;
    case error.TIMEOUT:
      errorMessage = "Geolocation request timed out";
      break;
  }
  displayError(errorMessage);
}

function displayError(message) {
  error.textContent = message;
}

function clearContent() {
  weatherInfo.innerHTML = "";
  error.innerHTML = "";
}
