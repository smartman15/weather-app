import { setBackgroundTemperature } from "./set-background-temperature.js";

export const LocationWeatherAPI = (() => {
  const locationDiv = document.getElementById("location-name");
  const temperatureDiv = document.querySelector("#temperature>p");
  const descriptionDiv = document.getElementById("description");
  let jsonObject;

  const getJson = () => jsonObject;

  const getLocationWeather = async (location) => {
    try {
      const processedLocation = location.split(" ").join("%20");
      // console.log('processed city: ' + processedCity);
      const url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        processedLocation +
        "?unitGroup=us&key=QJBS2EPUENQXYVM8KFPQY92QY&contentType=json";
      // console.log(url);
      const result = await fetch(url);
      const jsonResult = await result.json();
      jsonObject = jsonResult;

      locationDiv.textContent = "Location: " + jsonResult.resolvedAddress;
      descriptionDiv.textContent = "Description:" + jsonResult.description;

      // temperature in fahrenheit
      const temperature = jsonResult.currentConditions.temp;
      temperatureDiv.textContent = "Temperature: " + temperature + " F";

      setBackgroundTemperature(temperature);

      console.log(jsonResult);
    } catch (error) {
      throw new Error("couldnt get weather data :(");
    }
  };

  return { getLocationWeather, getJson };
})();
