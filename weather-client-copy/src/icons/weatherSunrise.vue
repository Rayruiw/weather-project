<template>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="v-icon">
      <path :d="icons.mdiWeatherSunrise"/>
    </svg>
  </template>
  
  <script>
  import { mdiWeatherSunrise } from '@mdi/js';
  
  export default {
    data() {
      return {
        icons: {
          mdiWeatherSunrise,
        },
      };
    },
  };
  </script>
  
  <style>
  .v-icon {
    width: 24px; 
    height: 24px;
  }
  </style>