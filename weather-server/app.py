
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


API_KEY = "b29671b64f6b2c335bbd3e43ccb9709e"

@app.route('/weather', methods=['GET'])
def get_weather():
   
    city = request.args.get('city')
    lat = request.args.get('latitude')
    lon = request.args.get('longitude')

    if not city and (not lat or not lon):
        return jsonify({'error': 'Missing city parameter'}), 400
    
    
    if city:
        # 城市名获取
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        url1= f"https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric"
    else:
        # 经纬度获取
        url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
        url1= f"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&&appid={API_KEY}&units=metric"
    
    response = requests.get(url)
    response1 = requests.get(url1)
    if response.status_code != 200:
        return jsonify({'error': 'Error fetching weather data'}), response.status_code
    
    
    data1=response1.json()
    data = response.json()
    result=[data,data1]
    print(result)
    weather_data = {
        "city": data['name'],
        "temperature": data['main']['temp'],
        "description": data['weather'][0]['description'],
        "humidity":data['main']['humidity'],
        "windSpeed":data['wind']['speed'],
        "visibility":data['visibility'],
        "sunrise":data['sys']['sunrise'],
        "sunset":data['sys']['sunset'],
        "icon": data['weather'][0]['icon'],
        "yValues":[data1["list"][0]["main"]["temp"],data1["list"][1]["main"]["temp"],data1["list"][2]["main"]["temp"],data1["list"][3]["main"]["temp"],data1["list"][4]["main"]["temp"]],
    }
    return jsonify(weather_data)
    

if __name__ == '__main__':
    app.run(debug=True)
