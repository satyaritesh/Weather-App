const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const apikey = "e88f4c168290df0c371b74104455bcf9";
const sunrise = document.querySelector('.day1t');
const sunset = document.querySelector('.day2t');
const maxtemp = document.querySelector('.day3t');
const mintemp = document.querySelector('.day4t');
const grndl = document.querySelector('.day5t');
const seal = document.querySelector('.day6t');
const cityName = document.getElementById('city-name');
const temperature = document.querySelector('.forecast-title');
const weatherDescription = document.getElementById('weather-condition');
const date = document.getElementById('date');
const ene = document.querySelector('.ene');
const hum = document.querySelector('.hum');
const UV = document.querySelector('.UV');
const vis = document.querySelector('.vis');
const pres = document.querySelector('.pres');


searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city !== '') {
        displayWeatherData(city);
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const city = cityInput.value.trim();
        if (city !== '') {
            displayWeatherData(city);
            cityInput.value = '';
            cityInput.blur();
        }
    }
});


async function displayWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        console.log(data);

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        date.textContent = new Date().toDateString();
        ene.textContent = `${data.wind.speed} m/s`;
        hum.textContent = `${data.main.humidity}%`;
        UV.textContent = 'N/A'; 
        vis.textContent = `${data.visibility / 1000} km`;
        pres.textContent = `${data.main.pressure} hPa`;
        sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        maxtemp.textContent = `${Math.round(data.main.temp_max)}°C`;
        mintemp.textContent = `${Math.round(data.main.temp_min)}°C`;
        grndl.textContent = data.main.grnd_level;
        seal.textContent = data.main.sea_level; 
    } catch (error) {
        console.error('Error displaying weather data:', error);
        alert('City not found. Please enter a valid city name.');
    }
}
