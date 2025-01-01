/*
Location-based Weather App
Problem: Create a simple weather application that fetches the user's location using the Geolocation API and then uses that location to display the current weather from a weather API (such as OpenWeatherMap). The user should be able to see their city name, temperature, and weather description based on their current location.
Steps:
1. Use the Geolocation API to get the user's current latitude and longitude.
2. Fetch weather data from a weather API (like OpenWeatherMap) using the Fetch API and the coordinates.
3. Display the weather data on the page.
*/

const API_KEY = "YOUR_API_KEY";
function getWeather() {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = "";

  const error = document.getElementById("error");
  error.innerHTML = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeatherData, showError);
  } else {
    error.innerHTML = "Geolocation is not supported by this browser";
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

    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const city = data.name;
    const weatherInfo = `
    City: ${city}<br>
    Temperature: ${temperature}°C<br>
    Weather: ${weatherDescription}
    `;

    const weatherInfoData = document.getElementById("weatherInfo");
    weatherInfoData.innerHTML = weatherInfo;
  } catch (error) {
    const errorText = document.getElementById("error");
    errorText.innerHTML = "Failed to fetch weather data.";
  }
}

function showError(error) {
  const err = document.getElementById("error");
  console.log(error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      err.innerHTML = "User denied the request for Geolocation";
      break;
    case error.POSITION_UNAVAILABLE:
      err.innerHTML = "Locaiton information is unavailable";
      break;
    case error.TIMEOUT:
      err.innerHTML = "Geolocation request timed out";
      break;
    case error.UNKNOWN_ERROR:
      err.innerHTML = "Unknown error occured!";
      break;
    default:
      err.innerHTML = "SOmething went wrong! try again";
  }
}
