import requests

def get_weather(city):
    api_key = '2dcc03ceca50d00d2a0fe94e0dc3fff5'
    base_url = 'base_url = "http://api.openweathermap.org/data/2.5/weather'
    complete_url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric"

    response = requests.get(complete_url)
    return response.json()

city_name = input("Enter city name: ")
weather_data = get_weather(city_name)
print(weather_data)
