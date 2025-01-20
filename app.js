const apiKey = '2213c635ce77843c434fe814a354533e';  // ここに正しいAPIキーを入力してください

async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod != 200) {
            weatherInfo.textContent = `エラーが発生しました: ${data.message}`;
        } else {
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const feels_like = data.main.feels_like;
            const humidity = data.main.humidity;
            const wind_speed = data.wind.speed;

            weatherInfo.innerHTML = `
                <h3>${cityName}の天気情報</h3>
                <p><strong>天気:</strong> ${description}</p>
                <p><strong>気温:</strong> ${temp}°C</p>
                <p><strong>体感温度:</strong> ${feels_like}°C</p>
                <p><strong>湿度:</strong> ${humidity}%</p>
                <p><strong>風速:</strong> ${wind_speed} m/s</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching the weather data: ', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.textContent = `エラーが発生しました: ${error.message}`;
    }
}

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    const cityName = document.getElementById('cityName').value;
    getWeather(cityName);
});
