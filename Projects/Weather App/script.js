document.addEventListener("DOMContentLoaded", function(){
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
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

//     async function fetchWeatherData(city) {
//     // const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
//     const url = `https: //api. openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


//     try {
//         const response = await fetch(URL); // await the fetch
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json(); // parse JSON
//         console.log(data);
//         //  data; // return the data
//     } catch (error) {
//         console.error("Fetch error:", error);
//         throw error; // let the caller handle it
//     }
// }


    function displayWeathedData(data){
        //displays data
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name

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