const cities = [
    "Tokyo",
    "Osaka",
    "Kyoto",
    "Nagoya",
    "Sapporo",
    "Fukuoka",
    "Hiroshima",
    "Sendai",
    "Naha",
    "Kagoshima"
];

function displayCities() {
    const cityList = document.getElementById('cityList');
    cities.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        listItem.addEventListener('click', (event) => {
            event.preventDefault();
            getWeather(city);
        });
        cityList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', displayCities);
