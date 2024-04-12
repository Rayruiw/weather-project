<!-- SvgWeatherIcon.vue -->
<template>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="v-icon">
      <path :d="iconPath" :fill="color"/>
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      iconPath: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .v-icon {
    width: 24px;
    height: 24px;
  }
  </style>