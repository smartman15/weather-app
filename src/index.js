import "./styles.css";
import { getLocationWeather } from "./get-location-weather.js";

const submitBtn = document.getElementById("submit");
const locationInput = document.getElementById("location");

submitBtn.addEventListener("click", (event) => {
  const location = locationInput.value;
  getLocationWeather(location);
});

// getCityWeather();
