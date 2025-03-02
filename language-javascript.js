function fetchWeather() {
    const city = document.getElementById('city').value.trim(); 
    const apiKey = '2dcc03ceca50d00d2a0fe94e0dc3fff5'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        document.getElementById('weatherResult').innerHTML = "Please enter a city name.";
        return;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `🌡️ Temperature: ${data.main.temp}°C <br> 🌦️ Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = "Error: " + error.message;
            console.error('Error:', error);
        });
}
