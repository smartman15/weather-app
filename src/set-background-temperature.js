export function setBackgroundTemperature(temperature) {
  const container = document.querySelector("div.content");
  const commentDiv = document.getElementById("comment");

  // if temperature is between 32F and 50F, set container class to cold
  if (temperature <= 50 && temperature >= 32) {
    container.className = "container content cold";
    commentDiv.textContent = "it's cold here...";
  }
  // if lower than 32F, set container class to freezing
  else if (temperature < 32) {
    container.className = "container content freezing";
    commentDiv.textContent = "it's f-freezing...";
  } else {
    container.className = "container content";
    commentDiv.textContent = "temperatures are alright here :)";
  }
}
