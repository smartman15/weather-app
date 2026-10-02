import "./styles.css";
import { LocationWeatherAPI } from "./get-location-weather.js";
import { toCelcius } from "./temperature-converter.js";

const submitBtn = document.getElementById("submit");
const locationInput = document.getElementById("location");
const temperatureP = document.querySelector("#temperature>p");

submitBtn.addEventListener("click", (event) => {
  const location = locationInput.value;
  LocationWeatherAPI.getLocationWeather(location);
});

// getCityWeather();
const celciusButton = document.getElementById("celcius");
celciusButton.addEventListener("click", (event) => {
  try {
    const celcius = toCelcius(
      LocationWeatherAPI.getJson().currentConditions.temp,
    );

    temperatureP.textContent = "Temperature: " + celcius + " C";
  } catch (error) {
    temperatureP.textContent = "You gotta search up a location first bro";
  }
});

const fahrenheitButton = document.getElementById("fahrenheit");
fahrenheitButton.addEventListener("click", (event) => {
  try {
    const fahrenheit = LocationWeatherAPI.getJson().currentConditions.temp;

    temperatureP.textContent = "Temperature: " + fahrenheit + " F";
  } catch (error) {
    temperatureP.textContent = "You gotta search up a location first bro";
  }
});
