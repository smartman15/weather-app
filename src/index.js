async function getCityWeather(){
    try {
        const result = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/santiago?unitGroup=us&key=QJBS2EPUENQXYVM8KFPQY92QY&contentType=json');
        const jsonResult = await result.json();
        console.log(jsonResult);
    } catch (error) {
        throw new Error('couldnt get weather data :(')
    }
}

getCityWeather();