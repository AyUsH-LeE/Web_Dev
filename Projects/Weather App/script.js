document.addEventListener("DOMContentLoaded", function(){
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const windSpeed = document.getElementById('wind-speed');
    const errorMessage = document.getElementById('error-message');

    // API_KEY = "a8debf093da04d20ac1144440252009";    // weatherapi.com
    API_KEY = "7da09a63cb3811c2bfa16b1776d75aa0";       // openweathermap.org
    getWeatherBtn.addEventListener('click', async (event) => {

        event.preventDefault()

        const city = cityInput.value.trim();
        if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeathedData(weatherData)
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city){
        console.log("Sending");
        
        //gets the data
        // const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`     // weatherapi.com
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`   // openweathermap.org

        const response = await fetch(URL);
        console.log(typeof response);
        console.log("Response: ", response);

        if(!response.ok)
        {
            throw new Error("City not found");
        }

        const data = await response.json();
        return data;
    };

    function displayWeathedData(data){
        //displays data
        console.log(data);
        const {name, main, weather, wind} = data;
        cityName.textContent = name
        temperature.textContent = `Temperature: ${main.temp}`;
        description.textContent = `Weather: ${weather[0].description}`;
        windSpeed.textContent = `Wind-Speed: ${wind.speed} km/h`;

        // unlock the display
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
    };

    function showError(){
        // shows error
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden')
    };
});