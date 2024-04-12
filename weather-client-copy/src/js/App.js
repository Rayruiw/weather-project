import axios from 'axios';
import { mdiWeatherSunsetUp, mdiWeatherSunsetDown } from '@mdi/js';

import dayImage from '../assets/backgrounds/day-bg.png';
//import nightImage from '../assets/backgrounds/night-bg.png';
import nightImage from '../assets/backgrounds/night.jpg';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import SvgWeatherIcon from '../components/SvgWeatherIcon.vue';

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
    yValues: '',
    panel: null,
    panelTitle: 'Details',
    chartInstance: null,
  }),
  computed: {
    formattedTemperature() {
      if (this.temperatureUnit === 'F') {
        return (this.weather.temperature * 9 / 5 + 32).toFixed(1);
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
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      }
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
          longitude: longitude
        }
      })
        .then(response => {
          this.weather = response.data;
          this.yValues = this.weather.yValues;
          /*
          this.$nextTick(() => {
            this.getChart(this.yValues); 
          });
          */
        })
        .catch(error => {
          console.error(error);
        });
    },
    beforeDestroy() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
    },
    getChart(yValues) {
      this.$nextTick(() => {
        if (this.chartInstance) {
          this.chartInstance.destroy();
        }
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["now", "+3h", "+6h", "+9h", "+12h"],
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
    //
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
          this.yValues = this.weather.yValues;
          if (now < this.weather.sunrise || now > this.weather.sunset) {
            this.currentBackgroundImage = this.nightBackgroundImage; // night
            this.textColor = 'white';
          } else {
            this.currentBackgroundImage = this.dayBackgroundImage; // day
            this.textColor = 'black';
          }
          if (this.panel === 0) {
            this.updateChart(this.yValues);
          }

          /*
          this.$nextTick(() => {
            this.getChart(this.yValues); 
          });
          */
        })
        .catch(error => {
          this.error = error;
          this.error = "There was an error fetching the weather data or the city was not found.";
          this.weather = null;
        });
    },
    updateChart(newData) {

      if (this.chartInstance) {

        this.chartInstance.destroy();
        this.chartInstance = null;
      }

      this.getChart(newData);
    },
    formatTime(timestamp) {
      return new Date(timestamp * 1000).toLocaleTimeString();
    },
    toggleTemperatureUnit() {
      this.temperatureUnit = this.temperatureUnit === 'C' ? 'F' : 'C';
    },
  },
}