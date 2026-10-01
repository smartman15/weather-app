import './styles.css';

const submitBtn = document.getElementById('submit');
const cityInput = document.getElementById('city');

submitBtn.addEventListener('click', (event) => {
    const city = cityInput.value;
    getCityWeather(city);
})


async function getCityWeather(city){
    try {
        const processedCity = city.split(' ').join('%20');
        const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + processedCity + '?unitGroup=us&key=QJBS2EPUENQXYVM8KFPQY92QY&contentType=json';
        const result = await fetch(url);
        const jsonResult = await result.json();
        console.log(jsonResult);
        
    } catch (error) {
        throw new Error('couldnt get weather data :(')
    }
}

// getCityWeather();