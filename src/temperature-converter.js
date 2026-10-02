import { LocationWeatherAPI } from "./get-location-weather.js";

export function toCelcius(fahrenheit) {
  const celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
}
