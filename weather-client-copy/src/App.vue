<template>
  <v-app>
  <v-main>
    <v-container>
      <v-row>
        <!--v-col cols="12" sm="6" offset-sm="3" class="d-flex justify-center">
          <v-btn color="primary" @click="getLocation">Get From Your Location</v-btn>
        </v-col-->
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
                  class="my-custom-button"
                >
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
/*
import axios from 'axios';
import { mdiWeatherSunsetUp, mdiWeatherSunsetDown } from '@mdi/js';


import dayImage from './assets/backgrounds/day-bg.png';
import nightImage from './assets/backgrounds/night-bg.png';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'App',
  components: {
    SvgWeatherIcon,
  },
  data: () => ({
    cityName: '',
    weather: null,
    error: null,
    textColor: 'black', 
    temperatureUnit: 'C', 
    dayBackgroundImage: dayImage, 
    nightBackgroundImage: nightImage, 
    currentBackgroundImage: dayImage, 
    icons: {
      mdiWeatherSunsetUp, 
      mdiWeatherSunsetDown,
    },
    yValues : '',
    panel: null,
    panelTitle: 'Details',
    chartInstance: null,
  }),
    formattedTemperature() {
      if (this.temperatureUnit === 'F') {
        return (this.weather.temperature * 9/5 + 32).toFixed(1); 
      }
      return this.weather.temperature; 
    },
  },
  mounted() {
    this.getLocation(); 
  },
  watch: {
    panel(newVal) {
      if (newVal === 0) {
        this.panelTitle = 'Hidden';
        this.$nextTick(() => {
          
          this.getChart(this.weather.yValues);
        });
      }
      else {
        this.panelTitle = 'Details';
    }
    }
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError); }
      else {
        console.log("Not support grolocation")
      }
    },
    showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      axios.get('http://localhost:5000/weather', {
        params: {
        latitude: latitude,
        longitude: longitude  }
                })
      .then(response => {
        this.weather=response.data;
        this.yValues=this.weather.yValues;
      })
      .catch(error => {
        console.error(error); });
    }, 
    beforeDestroy() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
    },
    getChart(yValues){
      this.$nextTick(() => {
        if (this.chartInstance) {
          this.chartInstance.destroy();
        }
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels:["now", "+3h", "+6h", "+9h", "+12h"],
            datasets: [{
              label: "real-time tempreture(Unit in °c)",
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: yValues,
            }]
          },
          options: {
            // legend: {display: false},
            scales: {
              y: {
                ticks: {
                  min: -20,
                  max: 40,
                  stepSize: 5,
                }
              },
            }
          }
        });
      });
    },
    fetchWeather() {
      axios.get('http://localhost:5000/weather', {
        params: {
          city: this.cityName
        }
      })
      .then(response => {
        this.weather = response.data;
        this.error = null;
        const now = new Date().getTime() / 1000; // now time
        this.yValues=this.weather.yValues;
        if (now < this.weather.sunrise || now > this.weather.sunset) {
          this.currentBackgroundImage = this.nightBackgroundImage; // night
          this.textColor = 'white'; 
        } else {
          this.currentBackgroundImage = this.dayBackgroundImage; // day
          this.textColor = 'black'; 
        }
      })
      .catch(error => {
        this.error = error;
        this.error = "There was an error fetching the weather data or the city was not found.";
        this.weather = null;
      });
    },
    formatTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleTimeString();
    },
    toggleTemperatureUnit() {
      this.temperatureUnit = this.temperatureUnit === 'C' ? 'F' : 'C';
    },
  },
}
*/
</script>

