const submitBtn = document.getElementById('submit');
const cityInput = document.getElementById('city');

submitBtn.addEventListener('click', (event) => {
    const city = cityInput.value;
    getCityWeather(city);
})


async function getCityWeather(city){
    try {
        const result = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=QJBS2EPUENQXYVM8KFPQY92QY&contentType=json');
        const jsonResult = await result.json();
        console.log(jsonResult);
    } catch (error) {
        throw new Error('couldnt get weather data :(')
    }
}

// getCityWeather();