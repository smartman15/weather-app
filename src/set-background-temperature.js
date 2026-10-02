export function setBackgroundTemperature(temperature) {
  const container = document.querySelector("div.content");

  // if temperature is between 32F and 50F, set container class to cold
  if (temperature <= 50 && temperature >= 32) {
    container.className = "container content cold";
  }
  // if lower than 32F, set container class to freezing
  else if (temperature < 32) {
    container.className = "container content freezing";
  } else {
    container.className = "container content";
  }
}
