import requests

API_KEY = '2213c635ce77843c434fe814a354533e'
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

def get_weather(city_name):
    params = {
        'q': city_name,
        'appid': API_KEY,
        'units': 'metric'
    }
    response = requests.get(BASE_URL, params=params)
    return response.json()

city_name = input("天気を知りたい都市名を入力してください: ")
weather_data = get_weather(city_name)

if weather_data.get('cod') != 200:
    print(f"エラーが発生しました: {weather_data.get('message')}")
else:
    print(f"{city_name}の天気: {weather_data['weather'][0]['description']}")
    print(f"気温: {weather_data['main']['temp']}°C")
