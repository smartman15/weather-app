import './styles.css';

const submitBtn = document.getElementById('submit');
const locationInput = document.getElementById('location');
const container = document.querySelector('div.container');

submitBtn.addEventListener('click', (event) => {
    const location = locationInput.value;
    getLocationWeather(location);
})


async function getLocationWeather(location){
    try {
        const processedLocation = location.split(' ').join('%20');
        // console.log('processed city: ' + processedCity);
        const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + processedLocation + '?unitGroup=us&key=QJBS2EPUENQXYVM8KFPQY92QY&contentType=json';
        // console.log(url);
        const result = await fetch(url);
        const jsonResult = await result.json();

        // temperature in fahrenheit
        const temperature = jsonResult.currentConditions.temp;
        console.log('temperature: ' + temperature);

        // if temperature is between 32F and 50F, set container class to cold
        if(temperature <= 50 && temperature >= 32){
            container.className = 'container cold';
        } 
        // if lower than 32F, set container class to freezing
        else if(temperature < 32){
            container.className = 'container freezing';
        }
        else{
            container.className = 'container';
        }
        

        console.log(jsonResult);
    } catch (error) {
        throw new Error('couldnt get weather data :(')
    }
}

// getCityWeather();