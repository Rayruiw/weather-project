<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude; // 获取当前位置的经度
      const latitude = position.coords.latitude; // 获取当前位置的纬度

      AMapLoader.load({
        key: "c8bbe677c3d25142e6618bd4b16a2817",
        version: "2.0",
        plugins: ["AMap.Scale"],
      }).then((AMap) => {
        map = new AMap.Map("container", {
          viewMode: "3D",
          zoom: 11,
          center: [longitude, latitude], // 使用当前位置的经度和纬度作为地图的中心点位置
        });
      }).catch((e) => {
        console.log(e);
      });
    });
  } else {
    console.log("浏览器不支持地理定位功能。");
  }
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>