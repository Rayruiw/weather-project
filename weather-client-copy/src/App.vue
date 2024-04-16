<template>
  <v-app>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3" class="search-col">
          <v-text-field label="Enter city name" v-model="cityName" clearable @keyup.enter="fetchWeather" class="mb-0"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3" class="d-flex justify-center btn-col">
          <v-btn color="primary" @click="fetchWeather" class="mt-0"> 
            Check Weather
          </v-btn>
        </v-col>
        
      </v-row>
      
      <v-row v-if="weather">
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card class="pa-3" :style="{ backgroundImage: 'url(' + currentBackgroundImage + ')', backgroundSize: 'cover' }">
            <v-card-title class="justify-center" :style="{ color: textColor }">{{ weather.city }}</v-card-title>
            <v-card-text :style="{ color: textColor }">
              <v-avatar size="100" class="mb-2">
                <v-img :src="`https://openweathermap.org/img/w/${weather.icon}.png`"></v-img>
              </v-avatar><br>
              <div>Temperature: {{ formattedTemperature }}
                <v-btn 
                  x-small 
                  fab 
                  icon 
                  @click="toggleTemperatureUnit" 
                  class="my-custom-button">
                  <v-icon small class="my-custom-icon">
                    {{ temperatureUnit === 'C' ? 'mdi-temperature-celsius' : 'mdi-temperature-fahrenheit' }}
                  </v-icon>
                </v-btn>
              </div>
              <div>Weather: {{ weather.description }}</div>
              <div>Humidity: {{ weather.humidity }}%</div>
              <div>Wind Speed: {{ weather.windSpeed }} m/s</div>
              <div>Visibility: {{ weather.visibility }} meters</div>
              <div class="d-flex align-center weather-text">
                <SvgWeatherIcon :iconPath="icons.mdiWeatherSunsetUp" :color="textColor"/>
                Sunrise: {{ formatTime(weather.sunrise) }}
              </div>
              <div class="d-flex align-center weather-text">
                <SvgWeatherIcon :iconPath="icons.mdiWeatherSunsetDown" :color="textColor"/>
                Sunset: {{ formatTime(weather.sunset) }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title>
                {{ panelTitle }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                
                <div class="graph-title">3 hour temperature (°C) forecast Graph</div>
                <div class="chart-container">
                  <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
                </div>
                
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels> 
        </v-col>
      </v-row>
      <v-row>
       <v-col cols="12" sm="6" offset-sm="3" class="d-flex justify-center">
            <v-btn color="primary" @click="checkSuitability">Check Suitability</v-btn>
          </v-col>
      <v-col cols="12" sm="6" offset-sm="3" class="suitability-col" v-if="showSuitability">
        <v-card style="background-color: #f0f0f0; padding: 10px;">
          <h1>Tips for going out</h1>
          <div style="font-weight: bold; color: #333;">Tips：{{ tips }}</div>
          <p style="font-weight: bold; color: #333;">Traveling suitability: {{ travelingSuitability }}</p>
          <p style="font-weight: bold; color: #333;">Hiking suitability: {{ hikingSuitability }}</p>
          <p style="font-weight: bold; color: #333;">Jogging suitability: {{ joggingSuitability }}</p>
        </v-card>
      </v-col>
        
      </v-row>
      <v-row><!--这是新加入的地图-->
        <v-col cols="12" sm="6" offset-sm="3">
          <div id="container"> <MapContainer> </MapContainer></div>
        </v-col>
        </v-row>
      <v-row v-if="error">
        <v-col cols="12" sm="6" offset-sm="3">
          <v-alert type="error" dismissible>{{ error }}</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>

</template>

<script>
import "./assets/AppStyles.css";
import AppLogic from './js/App.js';
export default AppLogic;
</script>

